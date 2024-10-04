const routerUser = require('./user.router')
const express = require('express');
const router = express.Router();

//rutas
router.use("/users", routerUser);

module.exports = router;