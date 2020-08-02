import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="user1"
        message="yo whats up"
        timestamp="40 second ago"
        profilepic="https://robohash.org/1?set=set2&size=180x180"
      />
      <Chat
        name="user2"
        message="Hello bro"
        timestamp="20 second ago"
        profilepic="https://robohash.org/2?set=set2&size=180x180"
      />
      <Chat
        name="user3"
        message="yo whats up"
        timestamp="40 second ago"
        profilepic="https://robohash.org/3?set=set2&size=180x180"
      />
      <Chat
        name="user4"
        message="yo whats up"
        timestamp="40 second ago"
        profilepic="https://robohash.org/4?set=set2&size=180x180"
      />
      <Chat
        name="user5"
        message="last message"
        timestamp="55 second ago"
        profilepic="https://robohash.org/5?set=set2&size=180x180"
      />
    </div>
  );
}

export default Chats;
