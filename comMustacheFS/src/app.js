const fs = require("fs");
const Mustache = require("mustache");
const data = require("./data");

fs.readFile("comMustacheFS/src/views/template.mustache", (err, template) => {
    if (err) throw err;

    const html = Mustache.render(template.toString(), data);

    console.log(html);
});
