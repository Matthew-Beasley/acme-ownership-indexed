const { client } = require('./client');

const createThings = async (thingName) => {
  const sql = `
  INSERT INTO things (thing_name)
  VALUES (thing_name = $1)
  RETURNING *`;
  return (await client.query(sql, [thingName])).rows[0];
}


const readThings = async () => {
  const sql = `
  SELECT * FROM things`;
  return (await client.query(sql)).rows;
}


const deleteThings = async (thingId) => {
  const sql = `
  DELETE FROM things
  WHERE thing_id = $1
  RETURNING *`;
  return (await client.query(sql, [thingId])).rows[0];
}


module.exports = {
  createThings,
  readThings,
  deleteThings
}
