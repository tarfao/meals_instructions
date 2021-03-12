# Desafio
Um desafio proposto pela Topi, para listar e buscar meals, ou refeições.

# Tecnologias utilizadas

## Frontend
* VueJs
* Lightning Design
* Axios
* Vuex

### Execução
`npm install`
`npm run serve`

## Backend
* NodeJS
* Express
* Jest

### Execução
`npm install`
`npm run serve`
* Para o teste execute: `npm run test`

## Recursos

* Get ('/'): Utilizando como parametros via query o limit e offset, sendo ambos números inteiros.
* Get ('/search'): Utilizando com parâmetros via query o limit, offset e a strMealSearch a ser pesquisada.

# Requisitos

* Os componentes se ajustam ao mobile, de acordo com a biblioteca de componentes Lightning Design.
* Sobre os teste unitário, fiz apenas no backend, não consegui dar seguimento ao teste no front.
* Pelo conceito do thumbnail, ele é apenas uma imagem de tamanho reduzido, porém ele é associado à vídeos.
No teste eu apenas exibi a imagem e não fiz o link para o vídeo pois não sabia se era necessário.

# Deploys

* Frontend = Vercel https://frontende-meals.vercel.app/
* Backend = Heroku https://back-meal.herokuapp.com/

# Observações

Como não conheço tão bem o Vuejs, não consegui componentizar o toast, e nem deixar mais enxuto a Home page.