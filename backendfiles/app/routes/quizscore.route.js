module.exports = app => {
    const quizescore = require("../controllers/quizscore.controller.js");
  
    var router = require("express").Router();
  
    const bodyParser = require("body-parser");
  
  router.use(bodyParser.json());
  
    // Create a new Tutorial
    router.post("/", quizescore.create);
  
   // Retrieve all Tutorials
    router.get("/", quizescore.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/aaaa", quizescore.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", quizescore.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", quizescore.delete);
  
    // Delete all Tutorials
    router.delete("/", quizescore.deleteAll);
  
    app.use('/api/quizscore', router);
  };