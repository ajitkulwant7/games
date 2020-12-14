const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');


exports.highscore = (req, res) => {
    db.sequelize.query("select quizid, userid, max(score) as  score from quizscores group by quizid", 
    { type: QueryTypes.SELECT }).then(data=>{
      res.send(data);
    });
      }


      exports.listquizes = (req, res) => {
        db.sequelize.query("select quizname from quizzes where category = ?",
        {replacement: [req.params.category],  type: QueryTypes.SELECT }).then(data=>{
          res.send(data);
        });
          }
    
          