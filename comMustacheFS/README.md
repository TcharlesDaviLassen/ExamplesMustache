Para criar um modelo avançado de template engine utilizando JavaScript e Mustache em documentos separados, podemos seguir os seguintes passos:

1. Instalar o Mustache através do npm:
`npm install mustache --save`
<br/>

2. Criar um arquivo `data.js` para definir os dados que serão utilizados no template:
```javascript

module.exports = {
  title: "Exemplo de template engine avançado com Mustache",
  subtitle: "Utilizando JavaScript para carregar os dados",
  products: [
    {
      name: "Produto 1",
      price: 9.99
    },
    {
      name: "Produto 2",
      price: 19.99
    },
    {
      name: "Produto 3",
      price: 29.99
    }
  ]
};
```

3. Criar um arquivo `template.mustache` para definir o layout da página:

```html

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{{title}}</title>
</head>
<body>
  <h1>{{title}}</h1>
  <h2>{{subtitle}}</h2>
  <ul>
    {{#products}}
      <li>{{name}} - ${{price}}</li>
    {{/products}}
  </ul>
</body>
</html>
```

4. Criar um arquivo `app.js` para carregar os dados e renderizar o template:

```javascript
Copy code
const fs = require("fs");
const Mustache = require("mustache");
const data = require("./data");

fs.readFile("./template.mustache", (err, template) => {
  if (err) throw err;

  const html = Mustache.render(template.toString(), data);

  console.log(html);
});
```

Executar o arquivo app.js através do node:
node app.js
Com esses passos, teremos um exemplo de template engine avançado com Mustache, utilizando JavaScript para carregar os dados e arquivos separados para definir o layout da página. O resultado final será a renderização do template em HTML, com os dados sendo exibidos corretamente.