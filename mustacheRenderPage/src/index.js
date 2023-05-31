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

fs.readFile('mustache/src/views/index.html', 'utf8', function(err, template) {
	if (err) throw err;

	const html = Mustache.render(template, data);

	fs.writeFile('mustache/src/writeFS/output.html', html, function(err) {
		if (err) throw err;

		console.log('Page generated!');
	});
});

