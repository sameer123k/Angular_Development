const customerController = require('../controllers.js/customer.controller')

//new
const clientController = require('../controllers.js/client.controller')
const permissionController = require('../controllers.js/permission.controller')


var router = require('express').Router()

router.post('/addnewcustomer',customerController.addcustomer)
router.get('/findallcustomer',customerController.findallcustomer)
router.get('/findByID/:id',customerController.findByID)
router.put('/updateByID/:id',customerController.updateByID)
router.delete('/deleteByID/:id',customerController.deleteByID)

//new
router.post('/addnewclient',clientController.addclient)
router.get('/findallclients',clientController.findallclient)
router.get('/findClientById/:id',clientController.findByID)
router.put('/updateClientdata/:id',clientController.updateByID)
router.delete('/deleteClient/:id',clientController.deleteByID)

//permission
router.post('/addpermission',permissionController.addpermission)
router.get('/findallpermissions',permissionController.findallpermission)
router.get('/findById/:id',permissionController.findbypermission)
router.put('/updatepermission/:id',permissionController.permissionByupdate)
router.delete('/deletepermission/:id',permissionController.permissionBydelete)

module.exports=router