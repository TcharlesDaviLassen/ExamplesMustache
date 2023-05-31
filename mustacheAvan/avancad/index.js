// Objeto com os dados para o template
var data = {
    nome: "João",
    idade: 30,
    emails: [
        { endereco: "joao@email.com" },
        { endereco: "joao2@email.com" }
    ],
    telefones: {
        celular: "(11) 99999-9999",
        residencial: "(11) 5555-5555"
    },
    amigos: [
        { nome: "Maria", idade: 28 },
        { nome: "Pedro", idade: 32 }
    ]
};

// Template com todas as tags do Mustache
var template = `
			<h1>{{nome}}</h1>
			<p>Idade: {{idade}}</p>
			<p>Emails: {{#emails}}<br>{{endereco}}{{/emails}}</p>
			<p>Telefones:
				<ul>
					<li>Celular: {{telefones.celular}}</li>
					<li>Residencial: {{telefones.residencial}}</li>
				</ul>
			</p>
			<p>Amigos:
				<ul>
					{{#amigos}}
					<li>{{nome}} ({{idade}} anos)</li>
					{{/amigos}}
				</ul>
			</p>
			<p>{{^amigos}}Você não tem amigos :( {{/amigos}}</p>
		`;

// Renderiza o template com os dados
var html = Mustache.render(template, data);

// Insere o HTML gerado no elemento da página
document.getElementById("conteudo").innerHTML = html;