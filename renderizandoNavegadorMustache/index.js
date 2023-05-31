// Dados dos produtos
const products = [
  { name: "Produto A", price: 10 },
  { name: "Produto B", price: 15 },
  { name: "Produto C", price: 20 },
];

// Template Mustache
const productTemplate = `
    {{#products}}
      <li>{{name}} - R$ {{price}},00</li>
    {{/products}}
  `;


// Renderizando a lista de produtos
const renderProducts = (products) => {
  const rendered = Mustache.render(productTemplate, { products });
  document.getElementById("products-list").innerHTML = rendered;
};

// Chamando a função para renderizar os produtos
renderProducts(products);
