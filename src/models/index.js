const Repair = require('./Repair');
const User = require('./User');
const Detail = require('./Detail');

Repair.belongsTo(Detail); //detailId
Detail.hasMany(Repair);

Repair.belongsTo(User); // this create userId row and the method Repair.setUser
User.hasMany(Repair); 