Segue abaixo um exemplo avançado de como utilizar Mustache em documentos separados, usando o conceito da template:

Arquivo` template.html`:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>{{title}}</title>
</head>
<body>
	{{> header}} <!-- Inclui o partial header -->
	<div id="content">
		{{{content}}} <!-- Renderiza o conteúdo sem escapar HTML -->
	</div>
	{{> footer}} <!-- Inclui o partial footer -->
</body>
</html>
```

Arquivo `header.html`:

```html
<header>
	<nav>
		<ul>
			{{#links}}
				<li><a href="{{url}}">{{label}}</a></li>
			{{/links}}
		</ul>
	</nav>
</header>
```

Arquivo` footer.html`:

```html
<footer>
	<p>&copy; {{year}} - Todos os direitos reservados.</p>
</footer>
```

Arquivo `index.js`:

```javascript
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
const header = fs.readFileSync('header.html', 'utf8');
const footer = fs.readFileSync('footer.html', 'utf8');

// Renderiza o template com os dados e os partials
const output = mustache.render(fs.readFileSync('template.html', 'utf8'), data, {
    header: header,
    footer: footer
});

console.log(output);
```

Neste exemplo, criamos um arquivo template.html que contém a estrutura HTML básica da página, e faz referência a dois partials: header.html e footer.html. Os partials são trechos de HTML que podem ser reutilizados em várias páginas, como o cabeçalho e rodapé.

No arquivo index.js, carregamos os dados que serão exibidos na página, bem como os arquivos dos partials. Em seguida, renderizamos o template usando o método `mustache.render()`, passando os dados e os partials como parâmetros.

Assim, conseguimos criar uma estrutura modular e reutilizável para nossas páginas, facilitando a manutenção do código.