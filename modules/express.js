const express = require("express");
const mongoose = require("mongoose");

const UserModels = require("../src/models/users.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

const port = 8080;

app.get("/views/users", async (req, res) => {
  const users = await UserModels.find({});

  res.render("index", { users });
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModels.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModels.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModels.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModels.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(501).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModels.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}`);
});
