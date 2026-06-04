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