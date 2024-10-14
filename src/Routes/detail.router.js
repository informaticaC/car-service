const { getAll, create, getOne, remove, update } = require('../controllers/detail.controllers');
const express = require('express');

const routerDetail = express.Router();

routerDetail.route('/')
    .get(getAll)
    .post(create);

routerDetail.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerDetail;