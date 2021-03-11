const express = require("express");
const getController = require("./controllers/getController");
const router = express.Router();

    /**
 * OBJETIVO: BUSCAR AS REFEIÇÕES E ENTREGAR PAGINADO.
 * PARÂMETROS: VIA QUERY ESPERA-SE OS PARÂMETROS:
 *             LIMIT = O LIMITE DE DADOS A SEREM ENVIADOS
 *             OFFSET = O NÚMEORO DE DADOS JÁ ENVIADOS, QUE É TAMBÉM A POSIÇÃO DO PRIMEIRO DADO QUE DEVEMOS ENVIAR.
 */
router.get('/', getController.getMeals)

/**
 * OBJETIVO: BUSCAR MEAL ATRAVÉS DO NOME, E DEVOLVER OS DADOS PARA SEREM PAGINADOS
 * PARÂMETROS: VIA QUERY ESPERA-SE OS PARÂMETROS:
 *             LIMIT = O LIMITE DE DADOS A SEREM ENVIADOS
 *             OFFSET = O NÚMEORO DE DADOS JÁ ENVIADOS, QUE É TAMBÉM A POSIÇÃO DO PRIMEIRO DADO QUE DEVEMOS ENVIAR.
 *             STRMEALSEARCH = O NOME DA MEAL QUE IREMOS BUSCAR
 */
router.get('/search', getController.searchMeals)

module.exports = router;