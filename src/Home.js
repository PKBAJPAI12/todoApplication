import React from "react";
import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const handleKeyInput = (e) => {
    console.log(input);
    if (e.key == "Enter") {
      console.log("enter");
      let arr = [];
      arr.push(...data, {
        todo: input,
        todono: data.length + 1,
      });
      setData(arr);
      console.log(arr);
    }
  };
  return (
    <>
      <div id="pane">
        <div id="leftpane">
          <h1 id="leftpaneh1">TASK LIST</h1>
          <p id="leftpanep">
            Add Task to your List by typing to the right and pressing enter. You
            may then view pending tasks below.
          </p>
        </div>
        <div id="rightpane">
          <h1 id="title">Add Note</h1>
          <textarea
            name=""
            id="textcontent"
            value={input}
            cols="30"
            rows="2"
            placeholder="Note Here..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyInput}
          ></textarea>
        </div>
      </div>
      {data.length > 0 && <Todo element={data} />}
    </>
  );
}
export default Home;
