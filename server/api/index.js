const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/recipes', require('./recipes'))
router.use('/ingredients', require('./ingredients'))

module.exports = router;