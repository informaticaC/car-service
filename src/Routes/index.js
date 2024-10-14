const routerUser = require('./user.router');
const routerRepair = require('./repair.router');
const routerDetail = require('./detail.router');
const express = require('express');
const router = express.Router();

//rutas
router.use("/users", routerUser);
router.use("/repairs", routerRepair);
router.use("/details", routerDetail);

module.exports = router;