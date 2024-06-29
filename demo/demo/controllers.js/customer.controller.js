const customer = require('../schema.js/customer.schema');
const permission = require('../schema.js/permission');
const addcustomer = async (req, res) => {
  const data = await customer.create({
    name: req?.body?.name,
    email: req?.body?.email,
    password: req?.body?.password,
    age: req?.body?.age,
    contact: req?.body?.contact,
  })
  const data1 = await permission.create({
    name: req?.body?.name,
    userEdit:true,
    userDelete:true,
    userView:true,
    userId:data._id,

    clientEdit:false,
    clientDelete:false,
    clientView:false,

  })
  try {
    return res.status(200).json(data);
  }
  catch {
    return res.status(400).json({ error: 'Failed to create customer' })
  }
}



const findallcustomer = async (req, res) => {

  customer.find().then((customers) => {
    res.send(customers);
  }).catch(err => {
    res.status(404).send({
      message: err.message || "Something went wrong while getting list of projects."
    });
  });

}




const findByID = async (req, res) => {
  let id = req.params.id
  try {
    let customerData = await customer.findById(id);
    if (!customerData)
      return res.status(400).json({ message: "not Found" })
    res.status(200).json(customerData)

  } catch (error) {
    return res.status(400).json({ message: error?.message })
  }
}



const updateByID = async (req, res) => {
  let id = req.params.id;
  const data = await customer.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    contact: req.body.contact
  });
  const updateddata = data;
  try {
    // return res.status(201).json(updateddata);
    res.json({ message: 'customer updated successfully' });

  }
  catch (error) {
    return res.status(500).json({ error: 'Failed to create post.' });
  }
};


const deleteByID = (req, res) => {
  const id = req.params.id;

  customer.findByIdAndRemove(id)
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
  addcustomer,
  findallcustomer,
  findByID,
  updateByID,
  deleteByID,
}