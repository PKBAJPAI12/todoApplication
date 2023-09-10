import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [updateTodono,setUpdateTodono]=useState({value:-1});
  const [status,setStatus]=useState(true);
  useEffect(()=>{
    console.log(` up ${updateTodono.value}`);
  },[updateTodono.value]);
  const handleKeyInput = (e,num) => {
    console.log(input);
    if (e.key == "Enter") {
      if(!status){
        console.log(status);
        console.log(`num is ${num}`);
        console.log("conf");
        data[num-1]={
          todo: input,
    todono: num,
    update:`<span>&#9998;</span>`,
    status:`<input type='checkbox' class='check'>`,
    delete:`<span>&#10060;</span>`
        }
        setData(data);
         console.log(data);
         setStatus(true);
         setInput("");
      }
      else{
        console.log(status);
        setData([...data, {
          todo: input,
          todono: data.length + 1,
          update:`<span>&#9998;</span>`,
          status:`<input type='checkbox' class='check'>`,
          delete:`<span>&#10060;</span>`
        }]);
        setInput("");
      }
    }
  };
  const updateTodo=(num,todo)=>{ 
    // console.log(`data ${data}`);
    console.log(`num ${num}`);
    setUpdateTodono({value:num});
    console.log(`update ${updateTodono.value}`);
    setStatus(false);
    setInput(todo);
    /*data.map((item)=>{
     if(item.todono==num){setData(...props.element,{
         todo:`<textarea id='updateta' cols='100' rows='2'>${todo}</textarea>`,
         todono:num,
         update:`<span>&#9998;</span>`,
         status:`<input type='checkbox' class='check'>`,
         delete:`<span>&#10060;</span>`
     })}
    })*/
    /* let arr=[];
     arr.push(...props.element);
     arr[num-1]={
         todo:`<textarea id='updateta' cols='100' rows='2'>${todo}</textarea>`,
         todono:num,
         update:`<span>&#9998;</span>`,
         status:`<input type='checkbox' class='check'>`,
         delete:`<span>&#10060;</span>`
     }
     console.log(arr);
     setData(arr);
     console.log(`data1 -> ${JSON.stringify(data[0].todo)}`);*/
    /* props.element[num-1]={
         todo:`<textarea id='updateta' cols='100' rows='2'>${todo}</textarea>`,
         todono:num,
         update:`<span>&#9998;</span>`,
         status:`<input type='checkbox' class='check'>`,
         delete:`<span>&#10060;</span>`
     };*/
     //input=todo;
    // setData(props);
    // setProps(props);
    //console.log();
 }
 /*const handleKey=(e,i,num)=>{
     if(e.key=="Enter"){
        console.log("e");
        console.log(`input ${i}`);
        props.element[num-1]={
         todo:`<td class='td1class'>${i}</td>`,
         todono:num,
         update:`<span>&#9998;</span>`,
     status:`<input type='checkbox' class='check'>`,
     delete:`<span>&#10060;</span>`
        };
        console.log(props);
        setData(props);
        console.log(`data2 ${data}`);
     }
 }*/
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
          {status &&
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
          }
          {!status &&
          <>
          <h1 id="title">Update Notes</h1>
          <textarea
            name=""
            id="textcontent"
            value={input}
            cols="30"
            rows="2"
            placeholder="Note Here..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=>{handleKeyInput(e,updateTodono.value)}}
          ></textarea>
          </>
          }
        </div>
      </div>
      {data.length > 0 && 
       <div id="notesection">
       <div id="alerthead">
         <h1 id="notesectionh1">My Notes</h1>
       </div>
       <table className='tableclass'>
           <tr className='trclass'>
               <th>Notes Name</th>
               <th>Update</th>
               <th>Status</th>
               <th>Delete</th>
           </tr>
           {data.map((item)=>
               <tr className='trclass'>
                   <td dangerouslySetInnerHTML={{__html: item.todo}} className='td1class'/>
                   <td onClick={()=>{updateTodo(item.todono,item.todo)}} dangerouslySetInnerHTML={{__html: item.update}} className='td2class'/>
                   <td dangerouslySetInnerHTML={{__html: item.status}} className='td2class'/>
                   <td dangerouslySetInnerHTML={{__html: item.delete}} className='td2class'/>
               </tr>
           )}
       </table>
     </div>
      }
    </>
  );
}
export default Home;
