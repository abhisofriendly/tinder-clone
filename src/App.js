import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import TinderCards from "./TinderCards";
import SwitchButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwitchButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* header */
/* tinder card */
/* button below tinder cards */

/* chats screen */
/* indivisual chat screen */
