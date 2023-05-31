var data = {
    title: "Exemplo de template em Mustache",
    description: "Esta é uma descrição de exemplo.",
    items: [
        {
            title: "Lista de compras",
            list: ["Leite", "Pão", "Ovos"]
        },
        {
            title: "Tarefas do dia",
            list: ["Ler um livro", "Ir ao mercado", "Fazer exercícios"]
        }
    ]
};

const template =
    `
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>{{title}}</title>
    </head>

    <body>
    <h1>{{title}}</h1>
    
        {{#description}}
            <p>{{description}}</p>
        {{/description}}
    
        {{#items}}
            <h2>{{title}}</h2>
            <ul>
                {{#list}}
                    <li>{{.}}</li>
                {{/list}}
            </ul>
        {{/items}}

        {{^items}}
            <p>No items found.</p>
        {{/items}}
        
        {{! This is a comment. }}
    </body>

    </html>
    `


// var template = document.getElementById('my-template').innerHTML;
var rendered = Mustache.render(template, data);
document.getElementById('output').innerHTML = rendered;