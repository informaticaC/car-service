const catchError = require('../utils/catchError');
const User = require('../models/User');
const Repair = require('../models/Repair');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await User.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


// const setRepair = catchError(async(req,res) =>{
//     const { id } = req.params  ;
//     console.log('user ID:==>>', id);
//     console.log('typeof id', typeof(id) ); 
//     console.log('req.body, repair to set:==>', req.body);
//     const userToSet = await User.findByPk( id );
//     console.log('user to set====>>>' , userToSet.dataValues);
//     await userToSet.setRepairs(req.body);       //setRepair(req.body);
//     const repair = await userToSet.getRepair();
//     console.log('repair:=====>', repair);
//     return res.json(repair);
// })

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    //setRepair
}