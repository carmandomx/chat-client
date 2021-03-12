import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";
import { useSelector } from "react-redux";

// const ENDPOINT = "localhost:5000";
const ENDPOINT = "https://academlo-chat.herokuapp.com/";

let socket;

const Chat = ({ location }) => {
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { username, token } = useSelector((state) => state.user);
  const room = useSelector((state) => state.roomToJoin);
  console.log(username);
  useEffect(() => {
    if (token && username) {
      socket = io(ENDPOINT, {
        query: {
          token,
        },
      });

      socket.on("error", (err) => console.log(err));

      socket.emit("join", { name: username, room }, (error) => {
        if (error) {
          console.error(error);
        }
      });

      socket.on("message", (message) => {
        console.log(message);
        setMessages((messages) => [...messages, message]);
      });

      socket.on("roomData", ({ users }) => {
        console.log(users);
        setUsers(users);
      });
    }
  }, [token, room, username]);

  // useEffect(() => {

  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="grid">
      <InfoBar room={room} />
      <div className="container">
        <Messages messages={messages} name={username} />
      </div>
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
