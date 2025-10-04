const User = require('./User');
const Repair = require('./Repair');
const Detail = require('./Detail');
const Vehicle = require('./Vehicle');
const Owner = require('./Owner');

// Define associations here
// One-to-Many: Owner has many Vehicles
Owner.hasMany(Vehicle, { foreignKey: 'ownerId' });
Vehicle.belongsTo(Owner, { foreignKey: 'ownerId' });

User.belongsToMany(Repair, { through: 'UsersRepairs'}); // this create repairId row and the method User.setRepair
Repair.belongsToMany(User, { through: 'UsersRepairs' }); // this create userId row and the method Repair.setUser

Detail.belongsToMany(Repair, { through: 'DetailsRepairs'});
Repair.belongsToMany(Detail, { through: 'DetailsRepairs'});

Vehicle.belongsToMany(Repair, { through: 'VehiclesRepairs'});
Repair.belongsToMany(Vehicle, { through: 'VehiclesRepairs'});