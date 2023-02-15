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

// GET /api/recipes/:recipeId
router.get('/:recipeId', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(req.params.recipeId,{
            include:[{
                model: Ingredient,
                as:'ingredients',
                attributes:['id',"name","color"]
            }]
        })

        res.json(recipe)
    }
    catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next)=>{
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe)
    } catch(error){
        next(error)
    }
})

router.put('/:recipeId', async (req, res, next)=>{
    try{
        const recipe = await Recipe.findByPk(req.params.recipeId);
        res.json(await recipe.update(req.body))
    } catch(error){
        next(error)
    }
})

router.delete('/:recipeId', async (req, res, next)=>{
    try{
        const recipe = await Recipe.findByPk(req.params.recipeId);
        await recipe.destroy();
        res.json(recipe)
    } catch(error){
        next(error)
    }
})


module.exports = router