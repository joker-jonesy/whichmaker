const router = require('express').Router();
const {Recipe, Ingredient}=require("../db");

router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.findAll({
            attributes: ['id', 'name', 'description', 'userId']
        })
        res.json(recipes)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/recipesPage/:recipeId
router.get('/:recipeId', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(req.params.recipeId)
        res.json(recipe)
    }
    catch (error) {
        next(error)
    }
})


// // GET /api/recipesPage/:recipeId/ingredientsPage
// router.get('/:recipeId/ingredientsPage', async (req, res, next) => {
//     try {
//         const ingredient = await Ingredient.findAll({
//             where: {
//                 recipeId: req.params.recipeId
//             },
//             include: [Recipe]
//         })
//         res.json(ingredient)
//     }
//     catch (error) {
//         next(error)
//     }
// })

module.exports = router