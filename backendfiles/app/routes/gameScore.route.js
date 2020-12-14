module.exports = app => {
    const gameScore = require("../controllers/gameScore.controller.js");
  
    var router = require("express").Router();
  
    const bodyParser = require("body-parser");
  
  router.use(bodyParser.json());
  
    // Create a new GameScore
    router.post("/", gameScore.create);
  
   // Retrieve all GameScores
    router.get("/", gameScore.findAll);
  
    // // Retrieve all published GameScores
    router.get("/published", gameScore.findAllPublished);
  
    // // Retrieve a single GameScore with id
    router.get("/:id", gameScore.findOne);
  
    // // Update a GameScore with id
    router.put("/:id", gameScore.update);
  
    // // Delete a GameScore with id
    router.delete("/:id", gameScore.delete);
  
    // // Delete all GameScores
    router.delete("/", gameScore.deleteAll);
  
    app.use('/api/gameScore', router);
  };