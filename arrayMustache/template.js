// const fs = require("fs");
// const Mustache = require("mustache");
// const data = require("./data");
const template = `
  {{#data}}
    <div>
      <h2>{{name}}</h2>
      <p>Age: {{details.age}}</p>
      <p>Email: {{details.email}}</p>
      <p>Address: {{details.address.street}}, {{details.address.city}}, {{details.address.state}} {{details.address.zip}}</p>
    </div>
  {{/data}}
`;

const data = [
  {
      id: 1,
      name: 'John',
      details: {
          age: 30,
          email: 'john@example.com',
          address: {
              street: '123 Main St',
              city: 'Anytown',
              state: 'CA',
              zip: '12345'
          }
      }
  },
  {
      id: 2,
      name: 'Jane',
      details: {
          age: 25,
          email: 'jane@example.com',
          address: {
              street: '456 Park Ave',
              city: 'Sometown',
              state: 'NY',
              zip: '67890'
          }
      }
  }
];


// fs.readFile("arrayMustache/index.html", (err, template) => {
    // if (err) throw err;

    const output = Mustache.render(template, { data });
    document.getElementById("products-list").innerHTML = output;
    console.log(output);

// });


