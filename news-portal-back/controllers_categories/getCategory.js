const { Pool, Client } = require("pg");
const pool = new Pool({
  connectionString: `${process.env.connectionString}`
});

async function getAllCategories(req, res) {
  (async () => {
    const client = await pool.connect();
    try {
      const categories = await client.query(`select * from categories`);
      const allCategories = categories.rows;
      if (!categories.rows.length) {
        return res.status(400).json("cateriy нет");
      }
      return res.status(200).json(allCategories);
    } finally {
      client.release();
    }
  })().catch((err) => {
    console.log(err);
    return res.status(400).json(err.detail);
  });
}

module.exports = {getAllCategories}