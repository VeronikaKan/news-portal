const { pool } = require("../pg-connection");

async function getAllUsers(req, res) {
  const client = await pool.connect();
  try {
    const time = req.requestTime;
    const users = await client.query(`select * from users`);
    const allUsers = users.rows;

    if (!allUsers.length) {
      return res.status(400).json("Новостей нет");
    }
    return res.status(200).json({ time, allUsers });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.detail);
  } finally {
    await client.release();
    await pool.end();
  }
}

async function getOneUser(req, res) {
  const { id } = req.params;
  const client = await pool.connect();
  try {
    const time = req.requestTime;
    const user = await client.query(`SELECT * FROM users WHERE user_id=${id}`);
    const oneUser = user.rows[0];
    console.log(user.rows);
    if (!oneUser) {
      return res.status(400).json("Пользователь не найден");
    }
    return res.status(200).json({ time, oneUser });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.detail);
  } finally {
    await client.release();
  }
}

module.exports = { getAllUsers, getOneUser };
