import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import HomeNav from "HomeNav.js";

// Home function
export default function Home () {
  return (
    <>
    <div className="home-wrapper">
      <div className="header">
        <h1>React-Chat App</h1>
      </div>

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