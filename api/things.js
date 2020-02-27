const express = require('express');
const { createThings, readThings, deleteThings } = require('../datalayer/index');
const thingRouter = express.Router();

thingRouter.post('/', async (req, res, next) => {
  try {
    const { thingName } = req.body;
    const data = await createThings(thingName);
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


thingRouter.delete('/', async (req, res, next) => {
  try {
    const { thingId } = req.body;
    const data =  await deleteThings(thingId);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { thingRouter };
