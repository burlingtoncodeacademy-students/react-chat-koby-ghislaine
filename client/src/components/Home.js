import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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

// Home function
export default function Home () {
  return (
    <>
    <div className="home-wrapper">
      <div className="header">
        <h1>React-Chat App</h1>
      </div>
      
      \* FORM to bring in the chatmessages and the usernames in to *\
      <div id="form-container">
        <form method="POST">
          <input id="username"
          type="text"
          name="username"
          placeholder="Enter your username" />

      <div className="home-page">
        <HomeNav />

      </div>
      <footer className="footer">
        Ghislaine and Koby Chat App
      </footer>
    </div>
    </>
  );
}