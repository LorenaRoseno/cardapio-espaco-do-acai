function formatarPreco(valor) {
    return valor.toFixed(2).replace(".", ",");
}

function menorPreco(produto) {
    if (produto.precoUnico) {
        return produto.precoUnico;
    }

    return Math.min(...Object.values(produto.precos));
}

function formatarTituloObrigatorio(tipo) {
    const titulos = {
        fruta: "Fruta",
        bombom: "Bombom",
        sorvete: "Sorvete",
        cobertura: "Cobertura"
    };

    return titulos[tipo] || tipo;
}

function formatarObrigatoriosSacola(obrigatorios) {
    const entradas = Object.entries(obrigatorios);

    if (entradas.length === 0) {
        return "Não possui";
    }

    return entradas
        .map(([tipo, valor]) => `${formatarTituloObrigatorio(tipo)}: ${valor}`)
        .join(" | ");
}

function formatarNomeAdicional(adicional) {
    if (adicional.opcao) {
        return `${adicional.nome} - ${adicional.opcao}`;
    }

    return adicional.nome;
}

function formatarAdicionaisComanda(adicionais, multiplicador = 1) {
    if (!adicionais || adicionais.length === 0) {
        return "<p>Nenhum</p>";
    }

    return adicionais.map(function (adicional) {
        const quantidadeTotal = adicional.quantidade * multiplicador;
        const total = adicional.preco * quantidadeTotal;

        return `
            <div class="linha-comanda">
                <span>${quantidadeTotal}x ${formatarNomeAdicional(adicional)}</span>
                <strong>R$ ${formatarPreco(total)}</strong>
            </div>
        `;
    }).join("");
}

function formatarObrigatoriosComanda(obrigatorios, multiplicador = 1) {
    const entradas = Object.entries(obrigatorios);

    if (entradas.length === 0) {
        return "";
    }

    let texto = "";

    entradas.forEach(function ([tipo, valores]) {
        valores.forEach(function (valor) {
            texto += `   ${multiplicador} ${valor} - R$ 0,00\n`;
        });
    });

    return texto;
}

function formatarTelefone(campo) {

    let valor = campo.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    if (valor.length > 10) {
        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );
    } else if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{2})(\d{4})(\d+)$/,
            "($1) $2-$3"
        );
    } else if (valor.length > 2) {
        valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );
    }

    campo.value = valor;
}

function mostrarAlerta(mensagem) {

    document.querySelector("#mensagem-alerta")
        .textContent = mensagem;

    document.querySelector("#overlay-alerta")
        .style.display = "flex";
}

function fecharAlerta() {

    document.querySelector("#overlay-alerta")
        .style.display = "none";
}

function lojaEstaAberta() {
    const agora = new Date();

    const dia = agora.getDay();
    const horaAtual = agora.getHours() * 60 + agora.getMinutes();

    const horarios = {
        0: { abre: "14:30", fecha: "22:30" }, // Domingo
        1: { abre: "13:45", fecha: "22:30" }, // Segunda
        2: null,                              // Terça fechado
        3: { abre: "13:45", fecha: "22:30" }, // Quarta
        4: { abre: "13:45", fecha: "22:30" }, // Quinta
        5: { abre: "13:45", fecha: "22:30" }, // Sexta
        6: { abre: "14:30", fecha: "18:30" }  // Sábado
    };

    const horarioHoje = horarios[dia];

    if (!horarioHoje) {
        return false;
    }

    const [horaAbre, minutoAbre] = horarioHoje.abre.split(":").map(Number);
    const [horaFecha, minutoFecha] = horarioHoje.fecha.split(":").map(Number);

    const abertura = horaAbre * 60 + minutoAbre;
    const fechamento = horaFecha * 60 + minutoFecha;

    return horaAtual >= abertura && horaAtual <= fechamento;
}

function atualizarStatusLoja() {
    const statusLoja = document.querySelector("#status-loja");

    if (!statusLoja) return;

    if (lojaEstaAberta()) {
        statusLoja.textContent = "Loja aberta";
        statusLoja.classList.add("aberto");
        statusLoja.classList.remove("fechado");
    } else {
        statusLoja.textContent = "Loja fechada";
        statusLoja.classList.add("fechado");
        statusLoja.classList.remove("aberto");
    }
}

function reconstruirAdicionais(adicionais) {
    const resultado = {};

    adicionais.forEach(function (adicional) {
        const chave = adicional.opcao
            ? `${adicional.nome} - ${adicional.opcao}`
            : adicional.nome;

        resultado[chave] = { ...adicional };
    });

    return resultado;
}