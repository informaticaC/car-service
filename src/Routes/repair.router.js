const { getAll, create, getOne, remove, update } = require('../controllers/repair.controllers');
const express = require('express');

const routerRepair = express.Router();

routerRepair.route('/')
    .get(getAll)
    .post(create);

routerRepair.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerRepair;