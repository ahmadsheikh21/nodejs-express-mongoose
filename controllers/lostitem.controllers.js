const lostitemController = {};
const Lostitems = require('../models/lostitem.model');
const Users = require('../models/users.model');

lostitemController.getAll = async (req, res) => {
  let lostitems;
  let users;
  try {
    
    let merged = {};
    const start = 0;
    const length = 100;
    lostitems = await Lostitems.paginate(
      merged,
      {
        offset: parseInt(start),
        limit: parseInt(length)
      }
    );
    res.status(200).send({
      code: 200,
      message: 'Successful',
      data: lostitems
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};

lostitemController.addlostitem = async (req, res) => {
  try {

    const body = req.body;

    const  lostitem = new Lostitems(body);

  const result = await lostitem.save();

    res.status(200).send({
      code: 200,
      message: 'Lost item Added Successfully',
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};
lostitemController.deletelostitem = async (req, res) => {
  if (!req.params._id) {
    Fu;
    res.status(500).send({
      message: 'ID missing'
    });
  }
  try {
    const _id = req.params._id;

    const result = await Lostitems.findOneAndDelete({
      _id: _id
    });

    res.status(200).send({
      code: 200,
      message: 'Deleted Successfully'
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};
lostitemController.updatelostitem = async (req, res) => {
  if (!req.params._id) {
  res.status(500).send({
  message: 'ID missing'
  });
  }
  try {
  const _id = req.params._id;
  let updates = req.body;
  runUpdate(_id, updates, res);
  } catch (error) {
  console.log('error', error);
  return res.status(500).send(error);
  }
  };
  
  async function runUpdate(_id, updates, res) {
  try {
  const result = await Lostitems.updateOne(
  {
  _id: _id
  },
  {
  $set: updates
  },
  {
  upsert: true,
  runValidators: true
  }
  );

      {
        if (result.nModified == 1) {
          res.status(200).send({
            code: 200,
            message: 'Updated Successfully'
          });
        } else if (result.upserted) {
          res.status(200).send({
            code: 200,
            message: 'Created Successfully'
          });
        } else {
          res.status(422).send({
            code: 422,
            message: 'Unprocessible Entity'
          });
        }
      }
  
  } catch (error) {
  console.log('error', error);
  return res.status(500).send(error);
  }
  }
module.exports = lostitemController;