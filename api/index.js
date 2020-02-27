const express = require('express');

const { userThingsRouter } = require('./userThings');
const { userRouter } = require('./users');
const { thingRouter } = require('./things');

const apiRouter = express.Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/things', thingRouter);
apiRouter.use('/user_things', userThingsRouter);

module.exports = { apiRouter };
