const express = require('express');
const { createUsers, readUsers, deleteUsers } = require('../datalayer/index');
const userRouter = express.Router();

userRouter.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await createUsers(name);
    res.status(201).send(data);
  } catch (error) {
    next(error)
  }
});


userRouter.get('/', async (req, res, next) => {
  try {
    const data = await readUsers();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


userRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await deleteUsers(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  userRouter
};
