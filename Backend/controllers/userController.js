const db = require("../db");

exports.registerUser = (req, res) => {

  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";

  db.query(sql,[name,email,password],(err,result)=>{

    if(err){
      res.send(err);
    }else{
      res.send("User registered");
    }

  });

};
