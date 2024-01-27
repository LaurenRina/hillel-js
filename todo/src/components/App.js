import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import "../style/styles.scss";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addToList = (text) => {
    setList([
      ...list,
      { text: text, id: `${text + list?.length}`, isDone: false },
    ]);
  };

  return (
    <div className="todo">
      <Input value={input} setValue={setInput} addToList={addToList} />
      <List list={list} />
    </div>
  );
}

export default App;
