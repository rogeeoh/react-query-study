// express router
const router = require('express').Router();
const {User} = require('../models');

// get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json({
      msg: 'Get all users',
      users
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Server Error',
      err
    });
  }
});

// get a user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json({
      msg: 'Get a user',
      user
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Server Error',
      err
    });
  }
});

// create a user
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password
    });
    return res.json({
      msg: 'Create a user',
      user
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Server Error',
      err
    });
  }
});

// update a user
router.put('/:id', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.update({
      email,
      password
    }, {
      where: {
        id: req.params.id
      }
    });
    return res.json({
      msg: 'Update a user',
      user
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Server Error',
      err
    });
  }
});

// delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json({
      msg: 'Delete a user',
      user
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Server Error',
      err
    });
  }
});


module.exports = router;