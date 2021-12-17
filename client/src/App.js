import logo from './logo.svg';
import './App.css';
import './components/room1'
import MainRoom from './components/room1';
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
// Room Component Imports
import Home from "./components/Home.js";
import BlightRoom from "./components/BlightRoom.js"
import ChristmasRoom from "./components/ChristmasRoom.js"
import RainyDayRoom from "./components/RainyDayRoom.js"

// Main App
function App() {
  // returns our (room) routes inside of the BrowserRouter
  return (
    <div>
      <BrowserRouter>
      /* purpose of BrowserRouter is for routing on the client-side using urls *\
      <Routes>

        \* contains all the individual routes *\
        <Route
        path = "/"
        element = {<Home/>}
        />

        <Route
        path = "/blight-town-room"
        element = {<BlighRoom/>}
        />

        <Route
        path = "/christmas-room"
        element = {<ChristmasRoom/>}
        />

        <Route
        path = "/rainy-day-room"
        element = {<RainyDayRoom/>}
        />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
