import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "ellen",
      image: "https://robohash.org/1?set=set2&size=180x180",
      message: "whats up",
    },
    {
      name: "ellen",
      image: "https://robohash.org/1?set=set2&size=180x180",
      message: "How it going",
    },
    {
      message: "Hi how are you going",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatscreen">
      <p className="chatscreen_timestamp">
        You mateched with ellen on 10/8/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen_message">
            <Avatar
              className="chatscreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatscreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen_message">
            <p className="chatscreen_textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatscreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="type a message"
          className="chatscreen_inputfield"
        />
        <button onClick={handleSend} className="chatscreen_inputbutton">
          send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
