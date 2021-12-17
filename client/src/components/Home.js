import React from "react";

// Home Page Function
export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <h1 id="welcome-message">Behold, the chat room! </h1>

        <div id="home-chat">
          <h3>Home Room Chat</h3>
          <p>Please select a chat room to get started!</p>
        </div>
        {/* link to the other rooms are in the HomeNav component*/}
        <div id="rooms">
          <h3> All Available Chat Rooms </h3>

          <HomeNav />
        </div>
        <footer className="footer">Ghislaine and Koby Chat App</footer>
      </div>
    </>
  );
}
