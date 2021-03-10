const PORT = 8000;
const meals_obj = require("./utils/meals");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
/**
 * OBJETIVO: BUSCAR AS REFEIÇÕES E ENTREGAR PAGINADO.
 * PARÂMETROS: VIA QUERY ESPERA-SE O PARAMETRO LIMIT E OFFSET, QUE REPRESENTAM
 *             O LIMITE DE DADOS ENVIADOS, E O NÚMEORO DE DADOS JÁ ENVIADOS, QUE 
 *             É TAMBÉM COM A POSIÇÃO DO PRIMEIRO DADO QUE DEVEMOS ENVIAR.
 */
app.get('/', (req, res) => {
    let { limit, offset } = req.query; //o limite sempre é fixo, já o offset é o total de itens já retornados
    //para definir os parâmetros do slice devemos calcular onde ele deve parar.
    limit = parseInt(limit);
    offset = parseInt(offset);

    //retorno apenas o limite informado, para fazer a paginação
    const arr_meals = meals_obj.meals.slice(offset, limit+offset);
    return res.status(200).json(arr_meals);
})

app.get('/search', (req, res) => {
    let { limit, offset, strMealSearch } = req.query; //o limite sempre é fixo, já o offset é o total de itens já retornados
    //para definir os parâmetros do slice devemos calcular onde ele deve parar.
    limit = parseInt(limit);
    offset = parseInt(offset);
    console.log(limit, offset, strMealSearch)
    //busco pelas refeições com nomes semelhantes, e retorno apenas o limite informado, para fazer a paginação
    const mealsFinded = meals_obj.meals.filter(meal => meal.strMeal.includes(strMealSearch)).slice(offset, offset+limit);
    return res.status(200).json(mealsFinded);
})

app.listen(PORT, () => {
    console.log("Server running in port 8000!");
})