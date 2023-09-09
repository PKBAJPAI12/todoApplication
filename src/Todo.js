import React from 'react';
import "./App.css";
import { useState } from 'react';
function Todo(props){
    const [data,setData]=useState([]);
    console.log(`data ${data}`);
    const updateTodo=(num,todo)=>{ 
        console.log(`data ${data}`);
        props.element[num-1]={
            todo:`<textarea id='updateta' cols='100' rows='2'>${todo}</textarea>`,
            todono:num
        };
        setData(props);
       // setProps(props);
       //console.log();
    }
    return(
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
            {props.element.map((item)=>
                <tr className='trclass'>
                    <td dangerouslySetInnerHTML={{__html: item.todo}} className='td1class'/>
                    <td onClick={()=>{updateTodo(item.todono,item.todo)}} className='td2class'><span>&#9998;</span></td>
                    <td className='td2class'><input type='checkbox' class='check'></input></td>
                    <td className='td2class'><span>&#10060;</span></td>
                </tr>
            )}
        </table>
      </div>
    )
}
export default Todo;