import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages').onSnapshot(snapshot => {setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (event) => {
    //to prevent the refresh from happening on the whole page when you hit enter
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Diana</h1>
      <h2>welcome {username}</h2>
    <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input}
          onChange={(event) => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}> Send message
          </Button>
      </FormControl>
    </form>

      {
        messages.map((message) => (
          <Message username={username} message={message} />
      ))
      }
    </div>
  );
}

export default App;
