const vinhos = [
    { nome: "Cabernet Sauvignon", tipo: "tinto", safra: 2022, estoque: 10 },
    { nome: "Chardonnay", tipo: "branco", safra: 2023, estoque: 3 },
    { nome: "Merlot", tipo: "tinto", safra: 2021, estoque: 4 },
    { nome: "Rosé da Vinícola", tipo: "rosé", safra: 2024, estoque: 8 }
];

function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({
        nome: nome,
        tipo: tipo,
        safra: safra,
        estoque: estoque
    });
}

function listarVinhos() {
    console.log("=== TODOS OS VINHOS ===");
    vinhos.forEach(function (vinho) {
        console.log(
            vinho.nome + " | Tipo: " + vinho.tipo +
            " | Safra: " + vinho.safra +
            " | Estoque: " + vinho.estoque
        );
    });
}

function listarEstoqueBaixo() {
    const vinhosBaixoEstoque = vinhos.filter(function (vinho) {
        return vinho.estoque < 5;
    });
    console.log("=== VINHOS COM ESTOQUE ABAIXO DE 5 ===");
    if (vinhosBaixoEstoque.length === 0) {
        console.log("Nenhum vinho com estoque baixo.");
    } else {
        vinhosBaixoEstoque.forEach(function (vinho) {
            console.log(vinho.nome + " | Estoque: " + vinho.estoque);
        });
    }
}

function calcularEstoqueTotal() {
    const total = vinhos.reduce(function (soma, vinho) {
        return soma + vinho.estoque;
    }, 0);
    console.log("=== ESTOQUE TOTAL ===");
    console.log(total + " unidades");
}

function listarNomesMaiusculos() {
    const nomes = vinhos.map(function (vinho) {
        return vinho.nome.toUpperCase();
    });
    console.log("=== NOMES EM MAIÚSCULAS ===");
    console.log(nomes);
}

adicionarVinho("Malbec", "tinto", 2022, 6);
listarVinhos();
listarEstoqueBaixo();
calcularEstoqueTotal();
listarNomesMaiusculos();
