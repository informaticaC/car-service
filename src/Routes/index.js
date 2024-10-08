const routerUser = require('./user.router');
const routerRepair = require('./repair.router');
const express = require('express');
const router = express.Router();

//rutas
router.use("/users", routerUser);
router.use("/repairs", routerRepair);

module.exports = router;