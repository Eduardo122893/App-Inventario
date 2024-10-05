const { Router } = require('express');
const { Cproducto } = require('../controllers/Cproducto');

const router =  Router();

router.get('/', Cproducto )



  module.exports   = router;