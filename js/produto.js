function carregarProdutos() {
    produtos.forEach(function (produto) {
        const lista = document.querySelector(`#lista-${produto.categoria}`);
        if (!lista) return;

        lista.innerHTML += `
            <div class="produto-card" onclick="abrirPopupProduto(${produto.id})">
                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="produto-info">
                    <h3>${produto.nome}</h3>

                    ${produto.descricao ? `
                        <p class="produto-descricao">${produto.descricao}</p>
                    ` : ""}

                    ${produto.categoria === "sucos" ? "<br>" : ""}

                    <p class="produto-preco">
                        ${produto.precoUnico
                ? `R$ ${formatarPreco(produto.precoUnico)}`
                : `A partir de R$ ${formatarPreco(menorPreco(produto))}`}
                    </p>
                </div>
            </div>
        `;
    });
}

function abrirPopupProduto(id) {
    produtoAtual = produtos.find(produto => produto.id === id);

    tamanhoAtual = null;
    escolhasObrigatorias = {};
    adicionaisAtuais = {};
    quantidadePopup = 1;

    document.querySelector("#popup-nome").textContent = produtoAtual.nome;
    document.querySelector("#popup-imagem").src = produtoAtual.imagem;
    document.querySelector("#quantidade-popup").textContent = quantidadePopup;
    document.querySelector("#observacao").value = "";

    montarTamanhos();
    montarObrigatorios();
    montarAdicionais();
    atualizarTotalPopup();

    document.querySelector("#overlay-produto").style.display = "flex";
}

function fecharPopupProduto() {
    document.querySelector("#overlay-produto").style.display = "none";
}

function montarTamanhos() {
    const area = document.querySelector("#popup-tamanhos");
    const blocoTamanhos = area.closest(".bloco-popup");

    area.innerHTML = "";

    if (produtoAtual.precoUnico) {
        tamanhoAtual = "Único";
        blocoTamanhos.style.display = "none";
        atualizarTotalPopup();
        return;
    }

    blocoTamanhos.style.display = "block";

    Object.entries(produtoAtual.precos).forEach(function ([tamanho, preco]) {
        area.innerHTML += `
            <button class="opcao-tamanho" onclick="selecionarTamanho('${tamanho}', this)">
                <strong>${tamanho}</strong>
                <span>R$ ${formatarPreco(preco)}</span>
            </button>
        `;
    });
}

function selecionarTamanho(tamanho, botaoClicado) {
    tamanhoAtual = tamanho;

    document.querySelectorAll(".opcao-tamanho").forEach(function (botao) {
        botao.classList.remove("selecionado");
    });

    botaoClicado.classList.add("selecionado");
    atualizarTotalPopup();
}

function montarObrigatorios() {
    const area = document.querySelector("#area-obrigatorios");
    const container = document.querySelector("#popup-obrigatorios");

    container.innerHTML = "";

    if (!produtoAtual.obrigatorios || Object.keys(produtoAtual.obrigatorios).length === 0) {
        area.style.display = "none";
        return;
    }

    area.style.display = "block";

    Object.entries(produtoAtual.obrigatorios).forEach(function ([tipo, quantidade]) {
        const opcoes = opcoesObrigatorias[tipo];
        if (!opcoes) return;

        container.innerHTML += `
        <div class="grupo-obrigatorio">
            <h3>${formatarTituloObrigatorio(tipo)}</h3>
            <p>Escolha ${quantidade} ${quantidade === 1 ? "opção" : "opções"}:</p>
            <div id="grupo-${tipo}"></div>
        </div>
    `;

        const grupo = document.querySelector(`#grupo-${tipo}`);

        opcoes.forEach(function (opcao) {
            grupo.innerHTML += `
            <label class="linha-opcao">
                <span>${opcao}</span>
                <input
                    type="${quantidade === 1 ? "radio" : "checkbox"}"
                    name="${tipo}"
                    value="${opcao}"
                    onchange="selecionarObrigatorio('${tipo}', '${opcao}', ${quantidade}, this)">
            </label>
        `;
        });
    });
}

function selecionarObrigatorio(tipo, valor, quantidadeMaxima, input) {
    if (!escolhasObrigatorias[tipo]) {
        escolhasObrigatorias[tipo] = [];
    }

    if (quantidadeMaxima === 1) {
        escolhasObrigatorias[tipo] = [valor];
        return;
    }

    const lista = escolhasObrigatorias[tipo];
    const indice = lista.indexOf(valor);

    if (indice >= 0) {
        lista.splice(indice, 1);
        return;
    }

    if (lista.length >= quantidadeMaxima) {
        mostrarAlerta(
            `Escolha apenas ${quantidadeMaxima} ${quantidadeMaxima === 1 ? "opção" : "opções"
            } de ${formatarTituloObrigatorio(tipo)}.`
        );

        input.checked = false;
        return;
    }

    lista.push(valor);
}

function montarAdicionais() {
    const area = document.querySelector("#popup-adicionais");
    area.innerHTML = "";

    adicionais.forEach(function (adicional, indexAdicional) {

        if (adicional.opcoes) {
            let opcoesHtml = "";

            adicional.opcoes.forEach(function (opcao, indexOpcao) {
                const idQtd = `qtd-adicional-${indexAdicional}-${indexOpcao}`;

                opcoesHtml += `
                    <div class="linha-subadicional">
                        <span class="nome-adicional">
                            ${opcao}
                        </span>

                        <strong class="preco-adicional">
                            +R$ ${formatarPreco(adicional.preco)}
                        </strong>

                        <div class="controle-adicional">
                            <button onclick="diminuirSubAdicional(${indexAdicional}, '${opcao}', '${idQtd}')">-</button>
                            <span id="${idQtd}">0</span>
                            <button onclick="aumentarSubAdicional(${indexAdicional}, '${opcao}', '${idQtd}')">+</button>
                        </div>
                    </div>
                `;
            });

            area.innerHTML += `
                <div class="grupo-adicional">
                    <h4>${adicional.nome}</h4>
                    ${opcoesHtml}
                </div>
            `;

            return;
        }

        area.innerHTML += `
            <div class="linha-adicional">
                <span class="nome-adicional">${adicional.nome}</span>

                <strong class="preco-adicional">
                    +R$ ${formatarPreco(adicional.preco)}
                </strong>

                <div class="controle-adicional">
                    <button onclick="diminuirAdicional(${indexAdicional})">-</button>
                    <span id="qtd-adicional-${indexAdicional}">0</span>
                    <button onclick="aumentarAdicional(${indexAdicional})">+</button>
                </div>
            </div>
        `;
    });
}

function aumentarAdicional(index) {
    const adicional = adicionais[index];
    const chave = adicional.nome;

    if (!adicionaisAtuais[chave]) {
        adicionaisAtuais[chave] = {
            nome: adicional.nome,
            opcao: null,
            preco: adicional.preco,
            quantidade: 0
        };
    }

    adicionaisAtuais[chave].quantidade++;

    document.querySelector(`#qtd-adicional-${index}`).textContent =
        adicionaisAtuais[chave].quantidade;

    atualizarTotalPopup();
}

function diminuirAdicional(index) {
    const adicional = adicionais[index];
    const chave = adicional.nome;

    if (!adicionaisAtuais[chave]) return;

    adicionaisAtuais[chave].quantidade--;

    if (adicionaisAtuais[chave].quantidade <= 0) {
        delete adicionaisAtuais[chave];
        document.querySelector(`#qtd-adicional-${index}`).textContent = 0;
    } else {
        document.querySelector(`#qtd-adicional-${index}`).textContent =
            adicionaisAtuais[chave].quantidade;
    }

    atualizarTotalPopup();
}

function aumentarSubAdicional(indexAdicional, opcao, idQtd) {
    const adicional = adicionais[indexAdicional];
    const chave = `${adicional.nome} - ${opcao}`;

    if (!adicionaisAtuais[chave]) {
        adicionaisAtuais[chave] = {
            nome: adicional.nome,
            opcao: opcao,
            preco: adicional.preco,
            quantidade: 0
        };
    }

    adicionaisAtuais[chave].quantidade++;

    document.querySelector(`#${idQtd}`).textContent =
        adicionaisAtuais[chave].quantidade;

    atualizarTotalPopup();
}

function diminuirSubAdicional(indexAdicional, opcao, idQtd) {
    const adicional = adicionais[indexAdicional];
    const chave = `${adicional.nome} - ${opcao}`;

    if (!adicionaisAtuais[chave]) return;

    adicionaisAtuais[chave].quantidade--;

    if (adicionaisAtuais[chave].quantidade <= 0) {
        delete adicionaisAtuais[chave];
        document.querySelector(`#${idQtd}`).textContent = 0;
    } else {
        document.querySelector(`#${idQtd}`).textContent =
            adicionaisAtuais[chave].quantidade;
    }

    atualizarTotalPopup();
}

function aumentarQuantidadePopup() {
    quantidadePopup++;
    document.querySelector("#quantidade-popup").textContent = quantidadePopup;
    atualizarTotalPopup();
}

function diminuirQuantidadePopup() {
    if (quantidadePopup > 1) {
        quantidadePopup--;
    }

    document.querySelector("#quantidade-popup").textContent = quantidadePopup;
    atualizarTotalPopup();
}

function calcularTotalPopup() {
    if (!produtoAtual || !tamanhoAtual) return 0;

    let total = produtoAtual.precoUnico || produtoAtual.precos[tamanhoAtual];

    Object.values(adicionaisAtuais).forEach(function (adicional) {
        total += adicional.preco * adicional.quantidade;
    });

    return total * quantidadePopup;
}

function atualizarTotalPopup() {
    document.querySelector("#popup-total").textContent =
        `R$ ${formatarPreco(calcularTotalPopup())}`;
}