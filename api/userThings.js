const express = require('express');
const { createUserThings, readUserThings, deleteUserThings } = require('../datalayer/index');
const userThingsRouter = express.Router();

userThingsRouter.post('/', async (req, res, next) => {
  try {
    const { userId, thingId } = req.body;
    const data = await createUserThings(userId, thingId);
    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
});


userThingsRouter.get('/', async (req, res, next) => {
  try {
    const data = await readUserThings();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


userThingsRouter.delete('/', async (req, res, next) => {
  try {
    const { userThingId } = req.body;
    const data = await deleteUserThings(userThingId);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { userThingsRouter };
