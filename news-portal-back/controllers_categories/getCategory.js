const {pool} = require("../pg-connection");

async function getAllCategories(req, res) {
  setTimeout(async()=>{
  const client = await pool.connect();
  try {
    const categories = await client.query(`select * from categories`);
    const allCategories = categories.rows;
    if (!categories.rows.length) {
      return res.status(400).json("cateriy нет");
    }
    return res.status(200).json(allCategories);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e.detail);
  } finally {
    await client.release();
  }
},1000)
}

module.exports = { getAllCategories };
