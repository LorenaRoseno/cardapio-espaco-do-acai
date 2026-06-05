function abrirCheckout() {
    if (sacola.length === 0) {
        mostrarAlerta("Sua sacola está vazia.");
        return;
    }

    if (!lojaEstaAberta()) {
        mostrarAlerta("A loja está fechada no momento. Consulte o horário de funcionamento.");
        return;
    }

    fecharSacola();
    document.querySelector("#overlay-checkout").style.display = "flex";
}

function fecharCheckout() {
    document.querySelector("#overlay-checkout").style.display = "none";
}

function mostrarCamposPagamento() {
    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');
    const areaTroco = document.querySelector("#area-troco");
    const areaPix = document.querySelector("#area-pix");
    const valorTroco = document.querySelector("#valor-troco");

    areaTroco.style.display = "none";
    areaPix.style.display = "none";
    valorTroco.style.display = "none";
    valorTroco.value = "";

    if (!pagamentoSelecionado) return;

    if (pagamentoSelecionado.value === "Dinheiro") {
        areaTroco.style.display = "block";
    }

    if (pagamentoSelecionado.value === "Pix") {
        areaPix.style.display = "block";
    }
}

function mostrarCampoTroco() {

    const opcaoTroco =
        document.querySelector('input[name="troco"]:checked');

    const valorTroco =
        document.querySelector("#valor-troco");

    if (!opcaoTroco) {
        valorTroco.style.display = "none";
        valorTroco.value = "";
        return;
    }

    if (opcaoTroco.value === "sim") {
        valorTroco.style.display = "block";
    } else {
        valorTroco.style.display = "none";
        valorTroco.value = "";
    }
}

function enviarPedidoWhatsapp() {
    const nomeCliente = document.querySelector("#nome-cliente").value.trim();
    const telefoneCliente = document.querySelector("#telefone-cliente").value.trim();
    const telefoneNumerico =
        telefoneCliente.replace(/\D/g, "");
    const rua = document.querySelector("#rua").value.trim();
    const numero = document.querySelector("#numero").value.trim();
    const complemento = document.querySelector("#complemento").value.trim();
    const bairro = document.querySelector("#bairro").value.trim();
    const referencia = document.querySelector("#referencia").value.trim();

    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');
    const opcaoTroco = document.querySelector('input[name="troco"]:checked');
    const valorTroco = document.querySelector("#valor-troco").value.trim();

    if (!nomeCliente) {
        mostrarAlerta("Informe seu nome.");
        return;
    }

    if (!telefoneCliente) {
        mostrarAlerta("Informe um telefone para contato.");
        return;
    }
    if (telefoneNumerico.length < 10) {
        mostrarAlerta("Informe um telefone válido com DDD.");
        return;
    }

    if (!rua || !numero || !bairro) {
        mostrarAlerta("Preencha rua, número da casa e bairro.");
        return;
    }

    if (!/^\d+$/.test(numero)) {
        mostrarAlerta("O número da casa deve conter apenas números.");
        return;
    }

    if (!pagamentoSelecionado) {
        mostrarAlerta("Escolha uma forma de pagamento.");
        return;
    }

    if (pagamentoSelecionado.value === "Dinheiro" && !opcaoTroco) {
        mostrarAlerta("Informe se precisa ou não de troco.");
        return;
    }

    if (
        pagamentoSelecionado.value === "Dinheiro" &&
        opcaoTroco &&
        opcaoTroco.value === "sim" &&
        !valorTroco
    ) {
        mostrarAlerta("Precisa de troco para qual valor?");
        return;
    }

    let mensagem = "";
    let subtotal = 0;

    mensagem += "ESPAÇO DO AÇAÍ\n";
    mensagem += "NOVO PEDIDO\n";
    mensagem += "-----------------------------\n\n";

    mensagem += "CLIENTE\n";
    mensagem += `Nome: ${nomeCliente}\n`;
    mensagem += `Telefone: ${telefoneCliente}\n\n`;

    mensagem += "ENDEREÇO\n";
    mensagem += `Rua: ${rua}, ${numero}\n`;
    mensagem += `Bairro: ${bairro}\n`;

    if (complemento) {
        mensagem += `Complemento: ${complemento}\n`;
    }

    if (referencia) {
        mensagem += `Referência: ${referencia}\n`;
    }

    mensagem += "\n";

    mensagem += "ITENS DO PEDIDO\n";
    mensagem += "-----------------------------\n";

    sacola.forEach(function (item) {
        const totalItem = item.precoUnitario * item.quantidade;
        subtotal += totalItem;

        mensagem += `${item.quantidade}x ${item.nome}\n`;

        const precoBase = item.precoUnitario - item.adicionais.reduce(function (total, adicional) {
            return total + (adicional.preco * adicional.quantidade);
        }, 0);

        if (item.tamanho && item.tamanho !== "Único") {
            mensagem += `   ${item.quantidade} ${item.tamanho}   R$ ${formatarPreco(precoBase)}\n`;
        }

        mensagem += formatarObrigatoriosComanda(item.obrigatorios, item.quantidade);

        if (item.adicionais.length > 0) {
            item.adicionais.forEach(function (adicional) {
                const quantidadeTotal = adicional.quantidade * item.quantidade;
                const totalAdicional = adicional.preco * quantidadeTotal;

                mensagem += `   ${quantidadeTotal} ${formatarNomeAdicional(adicional)}   R$ ${formatarPreco(totalAdicional)}\n`;
            });
        }

        if (item.observacao) {
            mensagem += `   Obs: ${item.observacao}\n`;
        }

        mensagem += "\n";
    });

    mensagem += "-----------------------------\n";
    mensagem += `TOTAL DO PEDIDO: R$ ${formatarPreco(subtotal)}\n\n`;

    mensagem += "PAGAMENTO\n";
    mensagem += `Forma: ${pagamentoSelecionado.value}\n`;

    if (pagamentoSelecionado.value === "Dinheiro") {
        if (opcaoTroco && opcaoTroco.value === "sim") {
            mensagem += `Troco para: R$ ${valorTroco}\n`;
        }

        if (opcaoTroco && opcaoTroco.value === "nao") {
            mensagem += "Não precisa de troco.\n";
        }
    }

    if (pagamentoSelecionado.value === "Pix") {
        mensagem += "Chave Pix: espacodoacai.udi@gmail.com\n";
        mensagem += "Enviar comprovante no WhatsApp.\n";
    }

    if (pagamentoSelecionado.value === "Cartão de crédito") {
        mensagem += "Pagamento no cartão de crédito.\n";
    }

    if (pagamentoSelecionado.value === "Cartão de débito") {
        mensagem += "Pagamento no cartão de débito.\n";
    }

    const telefone = "553432122898";
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}