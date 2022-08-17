const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokesController.getAllJokes);
  app.get("/api/jokes/:_id", JokesController.getSingleJoke);
  app.post("/api/jokes", JokesController.createNewJoke);
  app.put("/api/jokes/:_id", JokesController.updateJoke);
  app.delete("/api/jokes/:_id", JokesController.deleteJoke);
};
