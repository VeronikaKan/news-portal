const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { pool } = require("../pg-connection");

async function forgetPassword(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Некорректный данные при входе в систему",
    });
  }
  const { email } = req.body;
  const client = await pool.connect();
  try {
    const userInfo = await client.query(
      `select * from users where email='${email}'`
    );
    const user = userInfo.rows[0];
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }
    const password = Math.floor(100000 + Math.random() * 900000);
    const hashedPassword = await bcrypt.hash(password + "", 12);
    await client.query(
      `UPDATE users SET is_password_recovery=true, temporary_pass='${hashedPassword}' WHERE email='${email}'`
    );
    req.body = { email, password };
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "Что-то пошло не так, попробуйте снова",
      error: err.detail,
    });
  } finally {
    await client.release();
  }
}

module.exports = {
  forgetPassword,
};
