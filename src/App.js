import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //to prevent the refresh from happening on the whole page when you hit enter
    event.preventDefault();
    //all the logic to send the message goes here
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Diana</h1>
    <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input}
          onChange={(event) => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}> Send message
          </Button>
      </FormControl>
    </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))
      }
    </div>
  );
}

export default App;
