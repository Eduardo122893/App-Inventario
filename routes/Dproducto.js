const { Router } = require('express');
const { Dproducto } = require('../controllers/Dproducto');

const router =  Router();

router.post('/', Dproducto )



  module.exports   = router;