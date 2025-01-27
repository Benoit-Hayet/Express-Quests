const express = require("express");
const app = express();
app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies", movieControllers.getMovies);
app.post("/api/movies", movieControllers.postMovie);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", userControllers.getUsers);
app.post("/api/users", userControllers.postUsers);
app.get("/api/users/:id", userControllers.getUsersById);

module.exports = app;
