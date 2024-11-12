const catchError = require('../utils/catchError');
const Repair = require('../models/Repair');
const User = require('../models/User');
const Detail = require('../models/Detail');

const getAll = catchError(async(req, res) => {
    const results = await Repair.findAll({include: [User, Detail]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Repair.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Repair.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Repair.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Repair.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}