const { client } = require('./client');

const createUsers = async (userName) => {
  const sql = `
  INSERT INTO users (name)
  VALUES ($1)
  RETURNING *`;
  return (await client.query(sql, [userName])).rows[0];
}


const readUsers = async () => {
  const sql = `
  SELECT * FROM users`;
  return (await client.query(sql)).rows
}


const deleteUsers = async (userId) => {
  const sql = `
  DELETE FROM users
  WHERE id = $1
  RETURNING *`;
  return (await client.query(sql, [userId])).rows[0];
}


module.exports = {
  createUsers,
  readUsers,
  deleteUsers
};
