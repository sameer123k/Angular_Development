const permission = require('../schema.js/permission');
const client = require('../schema.js/client');
const customer = require('../schema.js/customer.schema');

const addpermission = async (req, res) => {

  const data = await permission.create({
    name: req?.body?.name,
    clientEdit: req?.body?.clientEdit,
    clientDelete:req?.body?.clientDelete,
    clientView:req?.body?.clientView,

    userEdit:req?.body?.userEdit,
    userDelete:req?.body?.userDelete,
    userView:req?.body?.userView,


  })
  try {
    return res.status(200).json(data);
  }
  catch {
    return res.status(400).json({ error: 'Failed to create customer' })
  }
}



const findallpermission = async (req, res) => {

  await permission.find().then((permissions) => {
    res.send(permissions);
  }).catch(err => {
    res.status(404).send({
      message: err.message || "Something went wrong while getting list of projects."
    });
  });

}




const findbypermission = async (req, res) => {
  let id = req.params.id
  try {
    let customerData = await client.findById(id);
    if (!customerData)
      return res.status(400).json({ message: "not Found" })
    res.status(200).json(customerData)

  } catch (error) {
    return res.status(400).json({ message: error?.message })
  }
}



const permissionByupdate = async (req, res) => {
  let id = req.params.id;
  const data = await permission.findByIdAndUpdate(id, {
    name: req.body.name,

    clientEdit:req.body.clientEdit,
    clientDelete:req.body.clientDelete,
    clientView:req.body.clientView,

    userEdit:req.body.userEdit,
    userDelete:req.body.userDelete,
    userView:req.body.userView,

  });
  console.log('gggg',req.body)
  const data1 = await client.findByIdAndUpdate(req.body.userId, {
    clientEdit:req.body.clientEdit,
    clientDelete:req.body.clientDelete,
    clientView:req.body.clientView,

    userEdit:req.body.userEdit,
    userDelete:req.body.userDelete,
    userView:req.body.userView,

  });
  
  const updateddata = data;
  try {
    // return res.status(201).json(updateddata);
    res.json({ message: 'Update permission Grantted ??' });

  }
  catch (error) {
    return res.status(500).json({ error: 'Failed to create post.' });
  }
};


const permissionBydelete = (req, res) => {
  const id = req.params.id;

  permission.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};


module.exports = {
  addpermission,
  findallpermission,
  findbypermission,
  permissionByupdate,
  permissionBydelete,
}