// const Mustache = require("mustache");


const template = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Exemplo Mustache</title>
        </head>
        <body>
            <h1>Lista de Produtos</h1>
            {{#produtos}}
                <div class="produto">
                <h2>{{nome}}</h2>
                <p>Preço: R$ {{preco}}</p>
                <p>Descrição: {{descricao}}</p>
                <p>Fabricante: {{fabricante.nome}} - {{fabricante.pais}}</p>
                </div>
            {{/produtos}}
        </body>
    </html>
`

const dados = {
    produtos: [
        {
            nome: "Smartphone",
            preco: 1000,
            descricao: "Um smartphone avançado com muitos recursos",
            fabricante: {
                nome: "Apple",
                pais: "Estados Unidos"
            }
        },
        {
            nome: "Notebook",
            preco: 2000,
            descricao: "Um notebook de última geração",
            fabricante: {
                nome: "Dell",
                pais: "Estados Unidos"
            }
        }
    ]
};

let resultado = Mustache.render(template, dados);
document.getElementById("produto").innerHTML = resultado;

