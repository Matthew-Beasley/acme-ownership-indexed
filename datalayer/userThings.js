const { client } = require('./client');

const createUserThings = async (userName, thingName) => {
  const sql = `
  INSERT INTO user_things (user_id, thing_id)
  (SELECT id FROM users WHERE name = $1),
    (SELECT id FROM things WHERE name = $2)
  RETURNING *`;
  return (await client.query(sql, [userName, thingName])).rows[0];
}


const readUserThings = async () => {
  const sql = `
  SELECT * FROM user_things`;
  return (await client.query(sql)).rows;
}


const deleteUserThings = async (userThingId) => {
  const sql = `
  DELETE FROM user_things
  WHERE user_thing_id = $1
  RETURNING *`;
  return (await client.query(sql, [userThingId])).rows[0];
}


module.exports = {
  createUserThings,
  readUserThings,
  deleteUserThings
}
