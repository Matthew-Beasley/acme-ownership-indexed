const { client } = require('./client');

const createUserThings = async (thingId, userId) => {
  const sql = `
  INSERT INTO user_things ("thingId", "userId")
  VALUES ($1, $2)
  RETURNING *`;
  return (await client.query(sql, [thingId, userId])).rows[0];
}


const readUserThings = async () => {
  const sql = `
  SELECT * FROM user_things`;
  return (await client.query(sql)).rows;
}


const deleteUserThings = async (userThingId) => {
  console.log(userThingId, ' in userthings datalayer delete')
  const sql = `
  DELETE FROM user_things
  WHERE user_things_id = $1
  RETURNING *`;
  return (await client.query(sql, [userThingId])).rows[0];
}


module.exports = {
  createUserThings,
  readUserThings,
  deleteUserThings
}
