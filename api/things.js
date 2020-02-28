const express = require('express');
const { createThings, readThings, deleteThings } = require('../datalayer/index');
const thingRouter = express.Router();

thingRouter.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await createThings(name);
    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
});


thingRouter.get('/', async (req, res, next) => {
  try {
    const data = await readThings();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});


thingRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data =  await deleteThings(id);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { thingRouter };
