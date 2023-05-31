// const Mustache = require('mustache')
// const path = require('path')

// console.log('=> ', __dirname+'/template.mustache')

fetch('http://127.0.0.1:5500/jsMustache/views/template.html')
    .then(response => response.text())
    .then(template => {
        const data = {
            title: 'Minha Lista de Compras',
            items: [
                { name: 'Maçã', price: 2, currency: 'R$' },
                { name: 'Banana', price: 3, currency: 'R$' },
                { name: 'Laranja', price: 2.5, currency: 'R$' }
            ]
        };
        const rendered = Mustache.render(template, data);
        console.log("= ", rendered);
        document.getElementById('content').innerHTML = rendered;
    }
);
