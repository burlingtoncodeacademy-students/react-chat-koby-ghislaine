import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
//import "./Home.css";

// Home Page Function
export default function Home() {
  return (
    <nav id="main-navigation">
      <h1 id="welcome-message">Behold, the chat room! </h1>
      <div id="home-room-wrapper">
        <div id="home-chat">
          <h3>Home Room Chat</h3>
          <p id="main">Space for messages to display </p>
        </div>
{/* link to the other rooms */}
        <div id="rooms">
          <h3> All Available Chat Rooms </h3>

          <Link to="/blight-town-room">
            <h4>Blight Town Room</h4>
          </Link>

          <Link to="/christmas-room">
            <h4>Christmas Room</h4>
          </Link>

          <Link to="/rainy-day-room">
            <h4>Rainy Day Room</h4>
          </Link>
        </div>
      </div>
      
      \* FORM to bring in the chatmessages and the usernames in to *\
      <div id="form-container">
        <form method="POST">
          <input id="username"
          type="text"
          name="username"
          placeholder="Enter your username" />

          <input
            id="message"
            type="text"
            placeholder="Enter your message here"
            name="message"
          />

          <input
          id = "usernameButton"
          type = "submit"
          formAction = "/send"/>
          
        </form>
      </div>
    </nav>
  );
}

export default Home