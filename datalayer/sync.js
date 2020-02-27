const { client } = require('./client');
const { createUserThings } = require('./userThings');
const { createThings } = require('./userThings');
const { createUsers } = require('./users');

const sync = async () => {
  const sql = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS user_things;
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS things;

  CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    user_name VARCHAR NOT NULL CHECK(char_length(user_name) > 1)
  );
  
  CREATE TABLE things (
    thing_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    thing_name VARCHAR(100) NOT NULL CHECK(char_length(thing_name) > 1)
  );
  
  CREATE TABLE user_things (
    user_things_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    user_id UUID NOT NULL REFERENCES users(user_id),
    thing_id UUID NOT NULL REFERENCES things(thing_id)
  );`;

  await client.query(sql);

  await createThings('ice axe');
  await createThings('crampons');
  await createUsers('pamela');
  await createUsers('helen');
  await createUserThings('pamela', 'ice axe');
  await createUserThings('helen', 'crampons');

}

module.exports = { sync };
