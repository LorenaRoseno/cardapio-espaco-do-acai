function adicionarNaSacola() {
    if (!produtoAtual.precoUnico && !tamanhoAtual) {
        mostrarAlerta("Escolha um tamanho.");
        return;
    }

    if (produtoAtual.obrigatorios) {
        for (const [tipo, quantidade] of Object.entries(produtoAtual.obrigatorios)) {
            if (
                !escolhasObrigatorias[tipo] ||
                escolhasObrigatorias[tipo].length !== quantidade
            ) {
                mostrarAlerta(
                    `Escolha ${quantidade} ${quantidade === 1 ? "opção" : "opções"
                    } de ${formatarTituloObrigatorio(tipo)}.`
                );
                return;
            }
        }
    }

    const adicionaisSelecionados = Object.values(adicionaisAtuais);

    const precoAdicionais = adicionaisSelecionados.reduce(function (total, adicional) {
        return total + (adicional.preco * adicional.quantidade);
    }, 0);

    const item = {
        nome: produtoAtual.nome,
        tamanho: tamanhoAtual,
        obrigatorios: { ...escolhasObrigatorias },
        adicionais: adicionaisSelecionados,
        observacao: document.querySelector("#observacao").value.trim(),
        precoUnitario: (produtoAtual.precoUnico || produtoAtual.precos[tamanhoAtual]) + precoAdicionais,
        quantidade: quantidadePopup
    };

    sacola.push(item);

    atualizarSacola();
    fecharPopupProduto();
    abrirSacola();
}

function atualizarSacola() {
    const itensSacola = document.querySelector("#itens-sacola");
    const subtotalElemento = document.querySelector("#subtotal");
    const barraSacola = document.querySelector("#barra-sacola");
    const quantidadeSacola = document.querySelector("#quantidade-sacola");
    const valorBarra = document.querySelector("#valor-barra");

    itensSacola.innerHTML = "";

    if (sacola.length === 0) {
        itensSacola.innerHTML = "<p>Sua sacola está vazia.</p>";
        subtotalElemento.textContent = "Subtotal: R$ 0,00";
        barraSacola.style.display = "none";
        return;
    }

    let subtotal = 0;
    let quantidadeTotal = 0;

    sacola.forEach(function (item, index) {
        const totalItem = item.precoUnitario * item.quantidade;

        subtotal += totalItem;
        quantidadeTotal += item.quantidade;

        itensSacola.innerHTML += `
            <div class="item-sacola">
                <h4>${item.nome}</h4>

                ${item.tamanho && item.tamanho !== "Único"
                ? `<p>Tamanho: ${item.tamanho}</p>`
                : ""}

                <p>Opções: ${formatarObrigatoriosSacola(item.obrigatorios)}</p>

                ${item.adicionais.length > 0
                ? `<p>Adicionais:</p> ${formatarAdicionaisComanda(item.adicionais, item.quantidade)}`
                : ""}

                ${item.observacao
                ? `<p>Obs: ${item.observacao}</p>`
                : ""}

                <div class="controle-quantidade">
                    <button onclick="diminuirQuantidadeSacola(${index})">-</button>
                    <span>${item.quantidade}</span>
                    <button onclick="aumentarQuantidadeSacola(${index})">+</button>
                </div>

                <strong>R$ ${formatarPreco(totalItem)}</strong>

                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });

    subtotalElemento.textContent = `Subtotal: R$ ${formatarPreco(subtotal)}`;
    barraSacola.style.display = "flex";
    quantidadeSacola.textContent = quantidadeTotal;
    valorBarra.textContent = `R$ ${formatarPreco(subtotal)}`;
}

function aumentarQuantidadeSacola(index) {
    sacola[index].quantidade++;
    atualizarSacola();
}

function diminuirQuantidadeSacola(index) {
    if (sacola[index].quantidade > 1) {
        sacola[index].quantidade--;
    } else {
        removerItem(index);
    }

    atualizarSacola();
}

function removerItem(index) {
    sacola.splice(index, 1);
    atualizarSacola();
}

function abrirSacola() {
    document.querySelector("#overlay-sacola").style.display = "flex";
}

function fecharSacola() {
    document.querySelector("#overlay-sacola").style.display = "none";
}