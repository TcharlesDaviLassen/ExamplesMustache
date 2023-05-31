Mustache é uma linguagem de modelo sem lógica e funciona basicamente substituindo as tags no modelo por valores reais. A estrutura básica de uma template em Mustache é composta por três tipos de tags:

- Tags de interpolação: `{{ nome_da_variável }}` - usadas para renderizar variáveis.

- Tags de seção: `{{# nome_da_variável }} ... {{/ nome_da_variável }}` - usadas para renderizar blocos de texto condicionalmente, dependendo se a variável é verdadeira ou falsa.

- Tags de inversão: `{{^ nome_da_variável }} ... {{/ nome_da_variável }}` - usadas para renderizar blocos de texto condicionalmente, dependendo se a variável é falsa ou vazia.

Além disso, também é possível usar comentários em Mustache, que são ignorados durante a renderização da template, e tags de valor parcial, que permitem renderizar valores específicos de uma lista.