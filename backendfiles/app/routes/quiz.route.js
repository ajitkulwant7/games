module.exports = app => {
    const quizes = require("../controllers/quiz.controller.js");
  
    var router = require("express").Router();
  
    const bodyParser = require("body-parser");
  
  router.use(bodyParser.json());
  
    // Create a new Tutorial
    router.post("/", quizes.create);
  
   // Retrieve all Tutorials
    router.get("/", quizes.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", quizes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", quizes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", quizes.delete);
  
    // Delete all Tutorials
    router.delete("/", quizes.deleteAll);
  
    app.use('/api/quiz', router);
  };