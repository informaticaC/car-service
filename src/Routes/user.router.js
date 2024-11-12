const { getAll, create, getOne, remove, update, setRepair } = require('../controllers/user.controllers');
const express = require('express');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(create);

routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerUser.route('/:id/setRepairs')
    .post(setRepair);

module.exports = routerUser;