// allows usage of .env to contain our "hidden variables"
require("dotenv").config();

// importing express server
const express = require("express");

// importing mongoose for database connection
const port = process.env.PORT || 8000;

// const path = require("path");

// assigns express to app variable
const app = express();

//setting up the static file server, pre-set for both dev and production (public = dev version) & (build = production version)
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

// allows for server to evaluate data as a json Obj
app.use(express.urlencoded({ extended: true }));

// importing mongoose to create the schemas and connects it to database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/chatRoom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 'database' variable projects onto mongoose (our connection to DB)
const database = mongoose.connection;

// creating the schema (in mongoose) to describe the components of the chat message schema

const messageSchema = new mongoose.Schema({
  room: { type: String },
  when: { type: Date, default: Date.now() },
  username: { type: String },
  message: { type: String },
});
const Message = mongoose.model("Message", messageSchema);

// setting up an error msg (schema validation slide-deck)
database.on("error", console.error.bind(console, "connection error:"));

// obtains the added 'author name' from the 'submit message form on the home-page ... this should set author name to the body of request
app.post("/send", async (req, res) => {
  const post = new Message({
    when: Date.now(),
    username: req.body.username,
    message: req.body.message,
  });
  await post.save();
  res.redirect("/");
});

// pulling up all messages from a certain room
app.get("/room/:roomID/messages", async (req, res) => {
  let allMessages = await Message.find({
    roomID: req.params.roomID,
  });
});

app.listen(port, () => {
  console.log(`listening on port: ' + ${port}`);
});
