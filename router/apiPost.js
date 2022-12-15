const db = require("../sql.connect");


// ฟังชั่น หลัก
module.exports = (router) => {
    console.log('apiPost ')

  router.post("/create", async (req, res) => {
    console.log('กำลังเข้าทำงานละกัน ')
    const { email, username, password } = req.body;
    try {
      console.log("xxx");
      db.query(
        "INSERT INTO goodgame(email, username,password) VALUES(?, ?, ?)",
        [email, username, password],
        (err, results, fields) => {
          if (err) {
            console.log("Err", err);
            return res.status(400).send();
          }
          console.log(results);
          return res.status(201).json({ email, username, password });
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).send("พังนะจ๊ะๆๆ");
    }
  });
};
