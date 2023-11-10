const jwt = require("jsonwebtoken");
const { pool } = require("../pg-connection");

async function addLike(req, res) {
  const { news_id } = req.body;
  const client = await pool.connect();
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, "gipgip");

    const user_id = decoded.userId;
    const like = await client.query(
      `select id from likes_to_users where user_id=${user_id} and like_id=${news_id} `
    );
    if(like?.rows[0]?.id){
      await client.query(
        `delete from likes_to_users where id=${like.rows[0].id}`
      );
      return res.status(200).json({
        message: `Пользователь ${user_id} udalil лайк ${news_id}`,
      });
    }
    await client.query(
      "INSERT INTO likes_to_users(like_id,user_id) VALUES($1,$2)",
      [news_id, user_id]
    );
    return res.status(200).json({
      message: `Пользователь ${user_id} лайкнул новость ${news_id}`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.detail);
  } finally {
    await client.release();
  }
}

async function getUsersId(req, res) {
  const { id } = req.params;
  const client = await pool.connect();
  try {
    const users = await client.query(
      `SELECT user_id FROM likes_to_users WHERE like_id=${id}`
    );
    const all_users_liked = users.rows;

    if (!all_users_liked.length) {
      return res.status(400).json("Новости с таким id нет");
    }
    return res.status(200).json({
      message: "Все id пользователей которым понравилась новость",
      arrayId: all_users_liked,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.detail);
  } finally {
    await client.release();
  }
}

async function getNewsLikedByUser(req, res) {
  setTimeout(async()=>{
  const client = await pool.connect();
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, "gipgip");

    const user_id = decoded.userId;
    const news = await client.query(
      `SELECT *, cast(n.likes_count as int) FROM likes_to_users l
        left join (select news_id, title, author, (select count(*) from likes_to_users where like_id=n.news_id) as likes_count, v.views_count, content, date, image, category_id
      from news n
      left join views v on n.views_id= v.views_id
      order by date desc) n on n.news_id=l.like_id
        WHERE user_id=${user_id}`
    );
    const all_news_liked = news.rows;

    if (!all_news_liked.length) {
      return res.status(400).json("Новости с таким id нет");
    }
    return res.status(200).json({
      message: "Все id пользователей которым понравилась новость",
      arrayId: all_news_liked,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.detail);
  } finally {
    await client.release();
  }
  },1000)
}

module.exports = { addLike, getUsersId, getNewsLikedByUser };
