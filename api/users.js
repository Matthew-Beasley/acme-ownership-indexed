const express = require('express');
const { createUsers, readUsers, deleteUsers } = require('../datalayer/index');
const userRouter = express.Router();

userRouter.post('/', async (req, res, next) => {
  try {
    const { userName } = req.body;
    const data = await createUsers(userName);
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


userRouter.delete('/', async (req, res, next) => {
  try {
    const { userId } = req.body;
    const data = await deleteUsers(userId);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  userRouter
};
