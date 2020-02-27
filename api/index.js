const express = require('express');

const { userThingsRouter } = require('./userThings');
const { usersRouter } = require('./users');
const { thingsRouter } = require('./things');
console.log(usersRouter, ' usersRouter in api index')

const apiRouter = express.Router();
console.log(apiRouter, ' apiRouter in api index')

apiRouter.use('/users', usersRouter);
apiRouter.use('/things', thingsRouter);
apiRouter.use('/user_things', userThingsRouter);

module.exports = { apiRouter };
