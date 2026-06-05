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

let categoriaAtivaAtual = "";

function destacarCategoriaAtiva() {

    const secoes = document.querySelectorAll(".secao");
    const links = document.querySelectorAll(".categorias a");

    let secaoAtual = "";

    secoes.forEach(function (secao) {

        const topo = secao.offsetTop - 150;

        if (window.scrollY >= topo) {
            secaoAtual = secao.id;
        }
    });

    links.forEach(function (link) {

        const href = link.getAttribute("href");

        link.classList.remove("ativo");

        if (href === `#${secaoAtual}`) {

            link.classList.add("ativo");

            if (categoriaAtivaAtual !== secaoAtual) {

                categoriaAtivaAtual = secaoAtual;

                link.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                });
            }
        }
    });
}

window.addEventListener("scroll", destacarCategoriaAtiva);

destacarCategoriaAtiva();