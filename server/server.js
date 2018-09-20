const express = require("express");
const parser = require("body-parser");
const app = express();
const db = require("../database/pushToDatabase.js");

// Parser
app.use(parser.json());

app.use(express.static("public"));

app.get("/restaurants/:id", (request, response) => {
  db.Restaurant.find({ name: request.params.id }, (err, data) => {
    if (err) {
      console.log("Error", err);
    }
    response.send(data[0]);
  });
});

app.listen(3002, () => console.log("Example app listening on port 3002!"));
