const mustache = require('mustache');
const fs = require('fs');

const data = {
    title: 'Meu site',
    content: '<h1>Bem-vindo ao meu site!</h1>',
    links: [
        { url: '/', label: 'Início' },
        { url: '/sobre', label: 'Sobre' },
        { url: '/contato', label: 'Contato' }
    ],
    year: new Date().getFullYear()
};

// Carrega os partials
const header = fs.readFileSync('componetsMustache/src/views/header.html', 'utf8');
const footer = fs.readFileSync('componetsMustache/src/views/footer.html', 'utf8');

// Renderiza o template com os dados e os partials
const output = mustache.render(fs.readFileSync('componetsMustache/src/views/template.html', 'utf8'), data, {
    header: header,
    footer: footer
});

const templateWrite = fs.writeFileSync('componetsMustache/src/index.html', output);
console.log(templateWrite)

console.log(output);
