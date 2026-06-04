const produtos = [
    //acai

    //01
    {
        id: 1,
        categoria: "acai",
        nome: "01 - Açaí Simples",
        imagem: "assets/cardapio/acai/acai-01.png",
        precos: {
            "350ml": 21.00,
            "500ml": 23.00,
            "750ml": 26.00,
            "1000ml": 33.00
        },
        obrigatorios: {}
    },

    //02
    {
        id: 2,
        categoria: "acai",
        nome: "02 - Açaí + Fruta",
        imagem: "assets/cardapio/acai/acai-02.png",
        precos: {
            "350ml": 21.50,
            "500ml": 23.50,
            "750ml": 26.50,
            "1000ml": 33.50
        },
        obrigatorios: {
            fruta: 1
        }
    },

    //03
    {
        id: 3,
        categoria: "acai",
        nome: "03 - Açaí + Fruta + Amendoim",
        imagem: "assets/cardapio/acai/acai-03.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1
        }
    },

    //04
    {
        id: 4,
        categoria: "acai",
        nome: "04 - Açaí + Fruta + Leite Condensado",
        imagem: "assets/cardapio/acai/acai-04.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1
        }
    },

    //05
    {
        id: 5,
        categoria: "acai",
        nome: "05 - Açaí + Fruta + Bombom",
        imagem: "assets/cardapio/acai/acai-05.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //06
    {
        id: 6,
        categoria: "acai",
        nome: "06 - Açaí + Fruta + Coco Ralado",
        imagem: "assets/cardapio/acai/acai-06.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1
        }
    },

    //07
    {
        id: 7,
        categoria: "acai",
        nome: "07 - Açaí + Fruta + Cobertura",
        imagem: "assets/cardapio/acai/acai-07.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1,
            cobertura: 1,
        }
    },

    //08
    {
        id: 8,
        categoria: "acai",
        nome: "08 - Açaí + Fruta + Gotas de Chocolate",
        imagem: "assets/cardapio/acai/acai-08.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1
        }
    },


    //09
    {
        id: 9,
        categoria: "acai",
        nome: "09 - Açaí + Fruta + Granola",
        imagem: "assets/cardapio/acai/acai-09.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1
        }
    },

    //10
    {
        id: 10,
        categoria: "acai",
        nome: "10 - Açaí + Fruta + Bola de Sorvete + Cobertura",
        imagem: "assets/cardapio/acai/acai-10.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
            sorvete: 1,
            cobertura: 1,
        }
    },

    //acai com leite ninho

    //11
    {
        id: 11,
        categoria: "ninho",
        nome: "11 - Açaí + Leite Ninho",
        imagem: "assets/cardapio/acai-leite-ninho/acai-11.png",
        precos: {
            "350ml": 22.50,
            "500ml": 24.50,
            "750ml": 27.50,
            "1000ml": 35.50
        },
        obrigatorios: {}
    },

    //12
    {
        id: 12,
        categoria: "ninho",
        nome: "12 - Açaí + Leite Ninho + Fruta",
        imagem: "assets/cardapio/acai-leite-ninho/acai-12.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //13
    {
        id: 13,
        categoria: "ninho",
        nome: "13 - Açaí + Leite Ninho + Fruta + Leite Condensado",
        imagem: "assets/cardapio/acai-leite-ninho/acai-13.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //14
    {
        id: 14,
        categoria: "ninho",
        nome: "14 - Açaí + Leite Ninho + Fruta + Paçoca",
        imagem: "assets/cardapio/acai-leite-ninho/acai-14.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //15
    {
        id: 15,
        categoria: "ninho",
        nome: "15 - Açaí + Leite Ninho + Fruta + Bombom",
        imagem: "assets/cardapio/acai-leite-ninho/acai-15.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //16
    {
        id: 16,
        categoria: "ninho",
        nome: "16 - Açaí + Leite Ninho + Fruta + Cobertura",
        imagem: "assets/cardapio/acai-leite-ninho/acai-16.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
            cobertura: 1,
        }
    },

    //17
    {
        id: 17,
        categoria: "ninho",
        nome: "17 - Açaí + Leite Ninho + Fruta + Leite Condensado + Bombom",
        imagem: "assets/cardapio/acai-leite-ninho/acai-17.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //18
    {
        id: 18,
        categoria: "ninho",
        nome: "18 - Açaí + Leite Ninho + Fruta + Leite Condensado + Paçoca",
        imagem: "assets/cardapio/acai-leite-ninho/acai-17.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //19
    {
        id: 19,
        categoria: "ninho",
        nome: "19 - Açaí + Leite Ninho + Fruta + Granola + Paçoca + Aveia",
        imagem: "assets/cardapio/acai-leite-ninho/acai-19.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //20
    {
        id: 20,
        categoria: "ninho",
        nome: "20 - Açaí + Leite Ninho + Fruta + Leite Condensado + Bola de Sorvete + Cobertura",
        imagem: "assets/cardapio/acai-leite-ninho/acai-20.png",
        precos: {
            "350ml": 26.00,
            "500ml": 28.00,
            "750ml": 31.00,
            "1000ml": 39.00
        },
        obrigatorios: {
            fruta: 1,
            sorvete: 1,
            cobertura: 1,
        }
    },

    //21
    {
        id: 21,
        categoria: "ninho",
        nome: "21 - Açaí + Leite Ninho + Fruta + Granola",
        imagem: "assets/cardapio/acai-leite-ninho/acai-21.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    // acai com pacoca

    //22
    {
        id: 22,
        categoria: "pacoca",
        nome: "22 - Açaí + Paçoca + Fruta",
        imagem: "assets/cardapio/acai-pacoca/acai-22.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //23
    {
        id: 23,
        categoria: "pacoca",
        nome: "23 - Açaí + Paçoca + Fruta + Leite Condensado",
        imagem: "assets/cardapio/acai-pacoca/acai-23.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //24
    {
        id: 24,
        categoria: "pacoca",
        nome: "24 - Açaí + Paçoca + Fruta + Bombom",
        imagem: "assets/cardapio/acai-pacoca/acai-24.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //25
    {
        id: 25,
        categoria: "pacoca",
        nome: "25 - Açaí + Paçoca + Fruta + Granola",
        imagem: "assets/cardapio/acai-pacoca/acai-25.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //26
    {
        id: 26,
        categoria: "pacoca",
        nome: "26 - Açaí + Paçoca + Fruta + Castanhas",
        imagem: "assets/cardapio/acai-pacoca/acai-26.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //27
    {
        id: 27,
        categoria: "pacoca",
        nome: "27 - Açaí + Paçoca + Fruta + Granola + Amendoim + Aveia",
        imagem: "assets/cardapio/acai-pacoca/acai-27.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //28
    {
        id: 28,
        categoria: "pacoca",
        nome: "28 - Açaí + Paçoca + Fruta + Leite Condensado + Bombom",
        imagem: "assets/cardapio/acai-pacoca/acai-27.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //29
    {
        id: 29,
        categoria: "pacoca",
        nome: "29 - Açaí + Paçoca + Fruta + Leite Condensado + Bola de Sorvete + Cobertura",
        imagem: "assets/cardapio/acai-pacoca/acai-29.png",
        precos: {
            "350ml": 26.00,
            "500ml": 28.00,
            "750ml": 31.00,
            "1000ml": 39.00
        },
        obrigatorios: {
            fruta: 1,
            sorvete: 1,
            cobertura: 1,
        }
    },

    //30
    {
        id: 30,
        categoria: "pacoca",
        nome: "30 - Açaí + 2 Paçocas + 2 Frutas + 2 Bombons + Granola + Bola de Sorvete + Cobertura",
        imagem: "assets/cardapio/acai-pacoca/acai-30.png",
        precos: {
            "350ml": 27.50,
            "500ml": 29.50,
            "750ml": 32.50,
            "1000ml": 40.50
        },
        obrigatorios: {
            fruta: 2,
            bombom: 2,
            sorvete: 1,
            cobertura: 1,
        }
    },

    //acai com ovomaltine

    //31
    {
        id: 31,
        categoria: "ovomaltine",
        nome: "31 - Açaí + Ovomaltine",
        imagem: "assets/cardapio/acai-ovomaltine/acai-31.png",
        precos: {
            "350ml": 22.50,
            "500ml": 24.50,
            "750ml": 27.50,
            "1000ml": 35.50
        },
        obrigatorios: {}
    },

    //32
    {
        id: 32,
        categoria: "ovomaltine",
        nome: "32 - Açaí + Ovomaltine + Fruta",
        imagem: "assets/cardapio/acai-ovomaltine/acai-32.png",
        precos: {
            "350ml": 23.00,
            "500ml": 25.00,
            "750ml": 28.00,
            "1000ml": 36.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //33
    {
        id: 33,
        categoria: "ovomaltine",
        nome: "33 - Açaí + Ovomaltine + Fruta + Leite Condensado",
        imagem: "assets/cardapio/acai-ovomaltine/acai-33.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //34
    {
        id: 34,
        categoria: "ovomaltine",
        nome: "34 - Açaí + Ovomaltine + Fruta + Paçoca",
        imagem: "assets/cardapio/acai-ovomaltine/acai-34.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //35
    {
        id: 35,
        categoria: "ovomaltine",
        nome: "35 - Açaí + Ovomaltine + Fruta + Bombom",
        imagem: "assets/cardapio/acai-ovomaltine/acai-35.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //36
    {
        id: 36,
        categoria: "ovomaltine",
        nome: "36 - Açaí + Ovomaltine + Fruta + Leite Condensado + Bombom",
        imagem: "assets/cardapio/acai-ovomaltine/acai-36.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //37
    {
        id: 37,
        categoria: "ovomaltine",
        nome: "37 - Açaí + Ovomaltine + Fruta + Leite Condensado + Paçoca",
        imagem: "assets/cardapio/acai-ovomaltine/acai-37.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00,
            "750ml": 30.00,
            "1000ml": 38.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //38
    {
        id: 38,
        categoria: "ovomaltine",
        nome: "38 - Açaí + Ovomaltine + Fruta + Granola",
        imagem: "assets/cardapio/acai-ovomaltine/acai-38.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //39
    {
        id: 39,
        categoria: "ovomaltine",
        nome: "39 - Açaí + Ovomaline + Fruta + Leite Condensado + Bola de Sorvete + Cobertura",
        imagem: "assets/cardapio/acai-ovomaltine/acai-39.png",
        precos: {
            "350ml": 26.00,
            "500ml": 28.00,
            "750ml": 31.00,
            "1000ml": 39.00
        },
        obrigatorios: {
            fruta: 1,
            sorvete: 1,
            cobertura: 1,
        }
    },

    //40
    {
        id: 40,
        categoria: "ovomaltine",
        nome: "40 - Açaí + Ovomaltine + Fruta + Leie Ninho",
        imagem: "assets/cardapio/acai-ovomaltine/acai-40.png",
        precos: {
            "350ml": 24.00,
            "500ml": 26.00,
            "750ml": 29.00,
            "1000ml": 37.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //acai kids

    //41
    {
        id: 41,
        categoria: "kids",
        nome: "41 - Açaí + Fruta + Chocoball + Bis + Gotas de Chocolate",
        imagem: "assets/cardapio/acai-kids/acai-41.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00
        },
        obrigatorios: {
            fruta: 1,
        }
    },

    //42
    {
        id: 42,
        categoria: "kids",
        nome: "42 - Açaí + Fruta + Granulado + Confetes + Cobertura",
        imagem: "assets/cardapio/acai-kids/acai-41.png",
        precos: {
            "350ml": 25.00,
            "500ml": 27.00
        },
        obrigatorios: {
            fruta: 1,
            cobertura: 1,
        }
    },

    //sucos energeticos

    //power
    {
        id: 43,
        categoria: "sucos",
        nome: "Power (500ml)",
        imagem: "assets/cardapio/sucos-energeticos/acai-power.png",

        descricao: "(Açaí batido com amendoim, aveia, castanhas sortidas, leite em pó, catuaba em pó, marapuama em pó, ginseng em pó, granola e 1 polpa de fruta.)",

        precoUnico: 26.50,

        obrigatorios: {
            fruta: 1
        }
    },

    //power ropical
    {
        id: 44,
        categoria: "sucos",
        nome: "Power Tropical (500ml)",
        imagem: "assets/cardapio/sucos-energeticos/acai-power-tropical.png",

        descricao: "(Açaí batido com amendoim, aveia, castanhas sortidas, leite em pó, catuaba em pó, marapuama em pó, ginseng em pó, granola e 2 polpas de frutas.)",

        precoUnico: 27.50,

        obrigatorios: {
            fruta: 2
        }
    },

    //promocionais

    //promo ninho
    {
        id: 45,
        categoria: "promocionais",
        nome: "Promo Ninho",
        imagem: "assets/cardapio/promocionais/promo-ninho.png",

        descricao: "Açaí 500ml + Leite Ninho + Fruta + Leite Condensado + Bombom",

        precoUnico: 26.00,

        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //promo paçoca
    {
        id: 46,
        categoria: "promocionais",
        nome: "Promo Paçoca",
        imagem: "assets/cardapio/promocionais/promo-pacoca.png",

        descricao: "Açaí 500ml + Paçoca + Fruta + Leite Condensado + Bombom",

        precoUnico: 25.00,

        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

    //promo ovomalttine
    {
        id: 47,
        categoria: "promocionais",
        nome: "Promo Ovomaltine",
        imagem: "assets/cardapio/promocionais/promo-ovomaltine.png",

        descricao: "Açaí 500ml + Ovomaltine + Fruta + Leite Condensado + Bombom",

        precoUnico: 26.00,

        obrigatorios: {
            fruta: 1,
            bombom: 1,
        }
    },

];

const opcoesObrigatorias = {
    fruta: [
        "Abacaxi (Batido)",
        "Banana (Batida)",
        "Banana (Picada)",
        "Cupuaçu (Batido)",
        "Goiaba (Batida)",
        "Maracujá (Batido)",
        "Morango (Batido)",
        "Morango (Picado)",
        "Uva Verde (Batida)",
        "Uva Verde (Picada)",
        "Sem fruta"
    ],

    bombom: [
        "Ouro Branco",
        "Sonho de Valsa",
        "Bis",
        "Sem Bombom"
    ],

    sorvete: [
        "Chocolate",
        "Creme",
        "Sem sorvete"
    ],

    cobertura: [
        "Abacaxi",
        "Amora",
        "Banana Caramelizada",
        "Caramelo",
        "Chocolate",
        "Frutas Vermelhas",
        "Kiwi",
        "Limão",
        "Maracujá",
        "Morango",
        "Tutti-Frutti",
        "Uva",
        "Sem cobertura"
    ]
};

const adicionais = [
    { nome: "Banana", preco: 1.50 },
    { nome: "Morango", preco: 2.50 },
    { nome: "Amendoim", preco: 3.50 },
    { nome: "Aveia", preco: 3.50 },
    { nome: "Bis", preco: 2.00 },
    { nome: "Castanhas Sortidas", preco: 3.50 },
    { nome: "Chocoball", preco: 3.50 },
    { nome: "Coco Ralado", preco: 3.50 },
    { nome: "Confetes de Chocolate", preco: 3.50 },
    { nome: "Gotas de Chocolate", preco: 3.50 },
    { nome: "Granola", preco: 3.50 },
    { nome: "Granulado", preco: 3.50 },
    { nome: "Leite Condensado", preco: 3.50 },
    { nome: "Leite Ninho", preco: 3.50 },
    { nome: "Nutella", preco: 7.50 },
    { nome: "Ouro Branco", preco: 2.50 },
    { nome: "Ovomaltine", preco: 3.50 },
    { nome: "Paçoca", preco: 2.00 },
    { nome: "Sonho de Valsa", preco: 2.50 },
    {
        nome: "Cobertura",
        preco: 2.50,
        opcoes: [
            "Abacaxi",
            "Amora",
            "Banana Caramelizada",
            "Caramelo",
            "Chocolate",
            "Frutas Vermelhas",
            "Kiwi",
            "Limão",
            "Maracujá",
            "Morango",
            "Tutti-Frutti",
            "Uva"
        ]
    },

    {
        nome: "Bola de Sorvete",
        preco: 3.50,
        opcoes: [
            "Chocolate",
            "Creme"
        ]
    },
];