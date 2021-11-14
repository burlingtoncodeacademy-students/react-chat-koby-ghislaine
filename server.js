//GMBL: note: I added notes, even to the boiler plate stuff because it helps me to talk it out to myself what its used for to retain it better
// allows usage of .env to contain our "hidden variables"
require("dotenv").config();
// importing express server
const express = require("express");
// importing mongoose for database connection
const port = process.env.PORT || 8000;
const path = require("path");


const app = express();
//think this is setting up the static file server, pre-set for both dev and production (public = dev version) & (build = production version)
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

// allows for server to evaluate data as a json Obj
app.use(express.urlencoded({ extended: true }));

//from Schema Validation slidedeck- pass {userNewUrlParser: true, useUnifiedTopology: true} as a 2nd argument to the connect method to avoid depreciation warnings
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/chatRoom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 'database' variable projects onto mongoose (our connection to DB)
const database = mongoose.connection;

// this is creating the schema (in mongoose) to describe the components of the chat message schema

const messageSchema = new mongoose.Schema({
  room: { type: String },
  when: { type: Date, default: Date.now() },
  username: { type: String },
  message: { type: String },
})
const Message = mongoose.model('Message', messageSchema)



// using the Schema above, I added a new model (named 'message') 


// setting up an error msg (schema validation slide-deck)
database.on('error', console.error.bind(console, 'connection error:'))

// obtains the added 'author name' from the 'submit message form on the home-page ... this should set author name to the body of request
app.post('/send', async (req, res) => {
  const post = new Message({
    when: Date.now(),
    username: req.body.username,
    message: req.body.message
  }
  )
  await post.save()
  res.redirect("/")

});




// maybe should add 'room' so like {author, room} so that their message will appear in THAT room

// app.post('/room/:roomID/message', async (req, res) => {   this is fucked
// getting properties from the request body
// let author = req.body.author;
// let chatBody = req.body.chatBody;
// make a new 'Date' obj & assign to 'date' variable (unless this date is a constructor- check)
// let when = new Date();
//pull the roomID for the specific 'room' that the user is posting a message into & assign it to roomID
// let roomID = req.params.roomID;

//at the same time, we can make sure that the body of the message does not exceed 500 characters, if it does- send error message
// if(msgBody > 500) {
// return res.sendStatus(403);
// }

// });

//const messageResponse = new Message({ dont need it 
//  author: author,
//chatbody: chatbody,
//when: new Date(),
//roomID: roomID
//});

//await messageResponse.save() its berokennnn
// sends the user like a 'success' message, BUT doesn't reload the page
//res.status(204).send()

// pulling up all messages from a certain room
app.get('/room/:roomID/messages', async (req, res) => {
  let allMessages = await Message.find({
    roomID: req.params.roomID
  });
});

// GMBL: re-direct from homepage to the actual chat room.. or should we do all the components like 1. set author, 2. set room, 3. set message and THEN re-direct to the chat route all at same time.. like do all the app.posts and then all the re-direct or alternate 1/2, 2/2, 3/3.. 





app.listen(port, () => {
  console.log(`listening on port: ' + ${port}`)
})

