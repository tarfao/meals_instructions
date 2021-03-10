const express = require("express");
const router = express.Router();
const meals_obj = require("./utils/meals");

    /**
 * OBJETIVO: BUSCAR AS REFEIÇÕES E ENTREGAR PAGINADO.
 * PARÂMETROS: VIA QUERY ESPERA-SE OS PARÂMETROS:
 *             LIMIT = O LIMITE DE DADOS A SEREM ENVIADOS
 *             OFFSET = O NÚMEORO DE DADOS JÁ ENVIADOS, QUE É TAMBÉM A POSIÇÃO DO PRIMEIRO DADO QUE DEVEMOS ENVIAR.
 */
router.get('/', (req, res) => {
    let { limit, offset } = req.query; //o limite sempre é fixo, já o offset é o total de itens já retornados
    //para definir os parâmetros do slice devemos calcular onde ele deve parar.
    limit = parseInt(limit);
    offset = parseInt(offset);

    //retorno apenas o limite informado, para fazer a paginação
    const arr_meals = meals_obj.meals.slice(offset, limit+offset);
    return res.status(200).json(arr_meals);
})

/**
 * OBJETIVO: BUSCAR MEAL ATRAVÉS DO NOME, E DEVOLVER OS DADOS PARA SEREM PAGINADOS
 * PARÂMETROS: VIA QUERY ESPERA-SE OS PARÂMETROS:
 *             LIMIT = O LIMITE DE DADOS A SEREM ENVIADOS
 *             OFFSET = O NÚMEORO DE DADOS JÁ ENVIADOS, QUE É TAMBÉM A POSIÇÃO DO PRIMEIRO DADO QUE DEVEMOS ENVIAR.
 *             STRMEALSEARCH = O NOME DA MEAL QUE IREMOS BUSCAR
 */
router.get('/search', (req, res) => {
    let { limit, offset, strMealSearch } = req.query; //o limite sempre é fixo, já o offset é o total de itens já retornados
    //para definir os parâmetros do slice devemos calcular onde ele deve parar.
    limit = parseInt(limit);
    offset = parseInt(offset);
    strMealSearch = strMealSearch.toUpperCase(); //como o includes é senstive case, faço a verificação com o mesmo tipo de mensagem
    //busco pelas refeições com nomes semelhantes, e retorno apenas o limite informado, para fazer a paginação
    const mealsFinded = meals_obj.meals.filter(meal => meal.strMeal.toUpperCase().includes(strMealSearch)).slice(offset, offset+limit);
    return res.status(200).json(mealsFinded);
})

module.exports = router;