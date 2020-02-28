const express = require('express');
const { createUserThings, readUserThings, deleteUserThings } = require('../datalayer/index');
const userThingsRouter = express.Router();

userThingsRouter.post('/', async (req, res, next) => {
  try {
    const { thingId, userId } = req.body;
    const data = await createUserThings(thingId, userId);
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


userThingsRouter.delete('/:id', async (req, res, next) => {
  try {
    console.log(req.params, ' params in userthings delete api')
    const { id } = req.params;
    console.log(id, ' after destructure')
    const data = await deleteUserThings(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { userThingsRouter };
