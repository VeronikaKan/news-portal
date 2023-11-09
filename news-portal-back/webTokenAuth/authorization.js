const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { Pool, Client } = require("pg");

const pool = new Pool({
  connectionString: `${process.env.connectionString}`
});
async function loginUser(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Некорректный данные при входе в систему",
    });
  }
  const { email, password } = req.body;
  (async () => {
    const client = await pool.connect();
    try {
      const userInfo = await client.query(
        `select * from users where email='${email}'`
      );
     
      const user = userInfo.rows[0];
      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }
if(user.is_password_recovery){
  return res.status(401).json({ message:'must create new password', userId: user.user_id });
}console.log(password);
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Неверный пароль, попробуйте снова" });
      }
      const token = jwt.sign(
        { email: user.email, userId: user.user_id ,is_admin:user.is_admin},
        "gipgip"
        // { expiresIn: "1h" }
      );

      req.headers.authorization = token.split(" ")[1];
      return res.status(200).json({ token, userId: user.user_id });
    } finally {
      await client.release();
    }
  })().catch((err) => {
    console.log(err);
    return res.status(400).json({
      message: "Что-то пошло не так, попробуйте снова",
      error: err.detail,
    });
  });
}


async function setNewPassword(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Некорректный данные при входе в систему",
    });
  }
  const { email, temporary_password, new_password } = req.body;
  (async () => {
    const client = await pool.connect();
    try {
      const userInfo = await client.query(
        `select * from users where email='${email}'`
      );
     
      const user = userInfo.rows[0];
      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }
if(!user.is_password_recovery){
  return res.status(401).json({ message:'must login', userId: user.user_id });
}
console.log(user);
      const isMatch = await bcrypt.compare(temporary_password+'', user.temporary_pass);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Неверный временный пароль, попробуйте снова" });
      }
      const hashedPassword = await bcrypt.hash(new_password+'', 12);
      await client.query(
        `UPDATE users SET is_password_recovery=false, temporary_pass=null, password='${hashedPassword}' WHERE email='${email}'`
      );
      return res.status(201).json({ message:`new password for user - ${email} is successfully changed`, userId: user.user_id });
    } finally {
      await client.release();
    }
  })().catch((err) => {
    console.log(err);
    return res.status(400).json({
      message: "Что-то пошло не так, попробуйте снова",
      error: err.detail,
    });
  });
}

module.exports = {
  loginUser, setNewPassword
};
