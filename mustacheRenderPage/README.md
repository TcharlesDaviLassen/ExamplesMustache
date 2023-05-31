Aqui está um exemplo avançado de como usar Mustache em JavaScript para renderizar uma página completa usando todas as estruturas de uma template.


```html

<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{{title}}</title>
</head>
<body>
    <header>
        <h1>{{title}}</h1>
        <nav>
            <ul>
                {{#menu}}
                <li><a href="{{url}}">{{label}}</a></li>
                {{/menu}}
            </ul>
        </nav>
    </header>
    <main>
        {{#posts}}
        <article>
            <h2>{{title}}</h2>
            <p>{{content}}</p>
        </article>
        {{/posts}}
    </main>
    <footer>
        <p>&copy; {{year}} - {{company}}</p>
    </footer>
</body>
</html>
```

```javascript
// index.js
const Mustache = require('mustache');
const fs = require('fs');

const data = {
	title: 'My Blog',
	menu: [
		{ label: 'Home', url: '/' },
		{ label: 'About', url: '/about' },
		{ label: 'Contact', url: '/contact' }
	],
	posts: [
		{ title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ title: 'Post 2', content: 'Nulla finibus lacus eget pretium tincidunt.' },
		{ title: 'Post 3', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' }
	],
	year: new Date().getFullYear(),
	company: 'My Company'
};

fs.readFile('index.html', 'utf8', function(err, template) {
	if (err) throw err;

	const html = Mustache.render(template, data);

	fs.writeFile('output.html', html, function(err) {
		if (err) throw err;

		console.log('Page generated!');
	});
});
```

Nesse exemplo, estamos renderizando uma página completa usando Mustache em JavaScript. A estrutura do arquivo HTML é definida em index.html, onde definimos as tags Mustache (`{{ }}`) para as variáveis que serão substituídas pelo conteúdo dinâmico.

Em index.js, lemos o arquivo HTML e usamos Mustache para substituir as variáveis pelo conteúdo definido em data. Por fim, salvamos o resultado em um arquivo output.html e exibimos uma mensagem de conclusão no console.

Note que usamos todas as estruturas disponíveis no Mustache, incluindo as tags condicionais (`{{# }}` e `{{^ }}`), tags de repetição (`{{# }}` e `{{/ }}`) e variáveis (`{{ }}`).