const express = require('express');
const app = express();
const ejs = require('ejs');
const patch = require('path');
const mustacheExpress = require('mustache-express');

// Configuração do Mustache com EJS
app.engine('ejs', mustacheExpress());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rota para renderizar a página
app.get('/', (req, res) => {
    res.render(patch.join(__dirname) + '/views/index.ejs', {
        title: 'Exemplo de Template Engine com EJS e Mustache',
        message: 'Este é um exemplo de como usar o Mustache com o EJS.'
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
