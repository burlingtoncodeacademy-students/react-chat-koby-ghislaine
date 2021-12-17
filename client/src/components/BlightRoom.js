// imports
import React from "react";
import { useState, useEffect } from "react";
import NavBlightRoom from "./BlightRoomNav";

// updating page for rainyDayRoom component
export default function BlightRoom() {
  //state to handle interval
  const [refreshPage, setRefreshPage] = useState(0);
  //message update function for page refresh
  function updateMessages(num) {
        // variable that sets the seconds to do what the function tells it to do every 10 sec
    let timer = setInterval(countdown, 1000);
    // function countdown acts when the setSeconds (above) is up.
     function countdown() {
       // num declared and conditional to trigger the action when countdown = 0
      
      num = num - 1;
      if (num <= 0) {
        window.location.reload();
        clearInterval(timer);
       
      }
    }
  }
  // updateMessages fxn updates messages every 10 second
  updateMessages(10)
  // consts to represent all the messages in the chat
  // state will hold results of the fetch
  const [BlightRoomMessages, setBlightRoomMessages] = useState([]);
  
  useEffect (() => {
      // using fetch to grab info from Mongo endpoints
      fetch('/blight-room-messages')
      .then(res => {
          return res.json()
      })
      // after the data is brought back, it'll be thrown into the wicked kewl setTotalMessages callback (line 34)
      .then(json => {
          setBlightRoomMessages(json)
      })
  }, [refreshPage]);

  // renders page appearance 
  return (
    <>
    <div className="room-wrapper">
      <div className="header">
        <h2>React-Chat App</h2>
      </div>
      <BlightRoomNav />

      <div className = "page-contents">
        <div className = "chat-area">
          <div id ="chat-messages">
            <h4>Chat Here</h4>
            {BlightRoomMessages.map(msg => {
              return(
                <div key={msg._id}>
                  <div>
                    {msg.na}
                    </div>
                    </div>

              )
            })}
          </div>
        </div>
      </div>

    </div>
    </>
  )
};


