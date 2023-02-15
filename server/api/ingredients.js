const router = require('express').Router()
const {Ingredient} = require('../db');

// GET /api/ingredientsPage
router.get('/', async (req, res, next) => {
    console.log("hit")
    try {
        const ingredient = await Ingredient.findAll({
            attributes: ['name', 'color','id']
        })
        res.json(ingredient)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/ingredientsPage/:ingId
router.get('/:ingId', async (req, res, next) => {
    console.log("hit")
    try {
        const ingredient = await Ingredient.findByPk(req.params.ingId)
        res.json(ingredient)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;