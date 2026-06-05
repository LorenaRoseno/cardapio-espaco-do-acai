function configurarOverlays() {
    const overlayProduto = document.querySelector("#overlay-produto");

    if (overlayProduto) {
        overlayProduto.addEventListener("click", function (event) {
            if (event.target.id === "overlay-produto") {
                fecharPopupProduto();
            }
        });
    }

    const overlaySacola = document.querySelector("#overlay-sacola");

    if (overlaySacola) {
        overlaySacola.addEventListener("click", function (event) {
            if (event.target.id === "overlay-sacola") {
                fecharSacola();
            }
        });
    }

    const overlayCheckout = document.querySelector("#overlay-checkout");

    if (overlayCheckout) {
        overlayCheckout.addEventListener("click", function (event) {
            if (event.target.id === "overlay-checkout") {
                fecharCheckout();
            }
        });
    }

    const campoTroco = document.querySelector("#valor-troco");

    if (campoTroco) {
        campoTroco.style.display = "none";
    }
}

const overlayAlerta = document.querySelector("#overlay-alerta");

if (overlayAlerta) {
    overlayAlerta.addEventListener("click", function (event) {
        if (event.target.id === "overlay-alerta") {
            fecharAlerta();
        }
    });
}

carregarProdutos();
configurarOverlays();

atualizarStatusLoja();
setInterval(atualizarStatusLoja, 60000);