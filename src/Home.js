import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [alertStatus,setAlertStatus]=useState("empty");
  const [updateTodono, setUpdateTodono] = useState({ value: -1 });
  const [status, setStatus] = useState(true);
  useEffect(() => {
    console.log(` up ${updateTodono.value}`);
  }, [updateTodono.value]);
  const handleKeyInput = (e, num) => {
    console.log(input);
    if (e.key == "Enter") {
      if (!status) {
        data[num - 1] = {
          todo: input,
          todono: num,
          update: `<span>&#9998;</span>`,
          status: `<input type='checkbox' class='check'>`,
          delete: `<span>&#10060;</span>`,
        };
        setData(data);
        console.log(data);
        setStatus(true);
        setInput("");
        setAlertStatus("update");
      } else {
        console.log(status);
        if(input.trim().length>0){
          setData([
            ...data,
            {
              todo: input,
              todono: data.length + 1,
              update: `<span>&#9998;</span>`,
              status: `<input type='checkbox' class='check'>`,
              delete: `<span>&#10060;</span>`,
            },
          ]);
          setInput("");
          setAlertStatus("added");
        }
        else if(input.trim().length==0 && input.length>0){
           setAlertStatus("extrablank")
        }
        else{
          setAlertStatus("blanknote")
        }
      }
    }
  };
  const updateTodo = (num, todo) => {
    setUpdateTodono({ value: num });
    console.log(`update ${updateTodono.value}`);
    setStatus(false);
    setInput(todo);
  };
  const deleteTodo=(num)=>{
    data.splice(num-1,1);
    data.map((item,i)=>{
       item.todono=i+1;
    })
    console.log(data);
    setData([...data]);
    setAlertStatus("delete");
  }
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
          {status && (
            <>
              <h1 id="title">Add Notes</h1>
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
            </>
          )}
          {!status && (
            <>
              <h1 id="title">Update Notes</h1>
              <textarea
                name=""
                id="textcontent"
                value={input}
                cols="30"
                rows="2"
                placeholder="Update Note Here..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  handleKeyInput(e, updateTodono.value);
                }}
              ></textarea>
            </>
          )}
        </div>
      </div>
      {data.length > 0 && (
        <div id="notesection">
          <div id="alerthead">
            <h1 id="notesectionh1">My Notes</h1>
            {alertStatus=="added" &&
            <h3 id="todoalert" style={{color:'green'}}>Note is Added Successfully</h3>
            }
            {alertStatus=="update" &&
            <h3 id="todoalert" style={{color:'green'}}>Note is Updated Successfully</h3>
            }
            {alertStatus=="delete" &&
            <h3 id="todoalert" style={{color:'red'}}>Note is Deleted Successfully</h3>
            }
            {alertStatus=="blanknote" &&
            <h3 id="todoalert" style={{color:'orange'}}>Required to Add Text Note</h3>
            }
            {alertStatus=="extrablank" &&
            <h3 id="todoalert" style={{color:'orange'}}>Blank Note is Not Allowed</h3>
            }
          </div>
          <table className="tableclass">
            <tr className="trclass">
              <th>Notes Name</th>
              <th>Update</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
            {data.map((item) => (
              <tr className="trclass">
                <td
                  dangerouslySetInnerHTML={{ __html: item.todo }}
                  className="td1class"
                />
                <td
                  onClick={() => {
                    updateTodo(item.todono, item.todo);
                  }}
                  dangerouslySetInnerHTML={{ __html: item.update }}
                  className="td2class"
                />
                <td
                  dangerouslySetInnerHTML={{ __html: item.status }}
                  className="td2class"
                />
                <td
                onClick={() => {
                  deleteTodo(item.todono);
                }}
                  dangerouslySetInnerHTML={{ __html: item.delete }}
                  className="td2class"
                />
              </tr>
            ))}
          </table>
        </div>
      )}
      {data.length==0 && 
              <div id="notesection">
              <div id="alerthead">
                <h1 id="notesectionh1">My Notes</h1>
                <h3 id="todoalert" style={{color:'red'}}>Note Book is Empty</h3>
              </div>
              </div>
      }
    </>
  );
}
export default Home;
