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

const setUser = catchError(async(req,res) =>{
    const { id } = req.params  ;
            console.log('repair ID:==>>', id);
            console.log('typeof id', typeof(id) ); 
            console.log('req.body, user to set:==>', req.body);
    const repair_instance = await Repair.findByPk( Number(id) );
            console.log('repair to set====>>>' , repair_instance);
    await repair_instance.setUsers(req.body)  //.setUser(req.body); //.setUser(req.body);       //setRepair(req.body);
    const user = await repair_instance.getUsers();      //Repair.findByPk( id );
            console.log('user:=====>', user.dataValues);
    return res.json(user);
})

const setDetail = catchError(async(req,res) =>{
    const { id } = req.params  ;
    const repair_instance = await Repair.findByPk( Number(id) );
    await repair_instance.setDetails(req.body);
    const detail = await repair_instance.getDetails();      //Repair.findByPk( id );
            console.log('detail:=====>', detail.dataValues);
    return res.json(detail);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setUser,
    setDetail
}