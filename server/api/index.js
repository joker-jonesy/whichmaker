const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/recipesPage', require('./recipes'))
router.use('/ingredientsPage', require('./ingredients'))

module.exports = router;