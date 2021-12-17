// imports
import React from "react";
import { useState, useEffect } from "react";
import ChristmasRoomNavigation from "./NavChristmasRoom.js";

// updating page for rainyDayRoom component
export default function ChristmasRoom() {
  const [refreshPage, setRefreshPage] = useState(null);
  function updateMessages(num) {
    let seconds = setSeconds(countdown, 1000);

    function countdown() {
      console.log(num);
      num = num - 1;
      if (num === 0) {
        window.location.reload();
        //updates new messages to the page on reload
      }
    }
  }
  // updateMessages fxn updates messages every 10 second
  updateMessages(10)
  // consts to represent all the messages in the chat
  const [totalMessages, setTotalMessages] = useState([]);
  
  useEffect (() => {
      // using fetch to grab info from Mongo endpoints
      fetch('/totalmessages')
      .then(res => {
          return res.json()
      })
      // after the data is brought back, it'll be thrown into the wicked kewl setTotalMessages callback (line 34)
      .then(json => {
          setTotalMessages(json)
      })
  }, [refreshPage]);
};
