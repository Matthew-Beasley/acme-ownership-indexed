const {
  createUsers,
  readUsers,
  deleteUsers
} = require('./users');


const {
  createThings,
  readThings,
  deleteThings
} = require('./things');


const {
  createUserThings,
  readUserThings,
  deleteUserThings
} = require('./userThings');

const { sync } = require('./sync');


module.exports = {
  createUsers,
  readUsers,
  deleteUsers,

  createThings,
  readThings,
  deleteThings,

  createUserThings,
  readUserThings,
  deleteUserThings,

  sync
};
