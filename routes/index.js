var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);

const sequelize = new Sequelize('mlmjs', 'root', 'bitcase123', {
  host: '165.227.125.116',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


var folder = sequelize.define('folder', { name: Sequelize.STRING });
folder.isHierarchy();



/* GET home page. */
router.get('/', function(req, res, next) {


  
  folder.findAll({ hierarchy: true }).then(function(results) {
    console.log(results[0].dataValues)
    res.status(200).send(results[0].dataValues);
 });

        //   folder.bulkCreate([
        //     {name: 'otroi', parentId: 13}
        //   ] ).then(function(results) {
             
        //   res.status(200).send(results[0].dataValues);

        // });
}); 

module.exports = router;
