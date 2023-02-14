const router = require('express').Router();
const {User, Recipe}=require("../db");

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'fName', 'username']
        })
        res.json(users)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId)
        res.json(user)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/users/:userId/recipesPage
router.get('/:userId/recipesPage', async (req, res, next) => {
    try {
        const recipes = await Recipe.findAll({
            where:{
                userId: req.params.userId
            }
        })
        res.json(recipes)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router