const { Router } = require('express');
const { Rproducto } = require('../controllers/Rproducto');

const router =  Router();


router.post('/', Rproducto )



  module.exports   = router;
  