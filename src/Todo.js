import React from 'react';
import "./App.css";

function Todo(props){
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
                    <td className='td1class'>{item.todo}</td>
                    <td className='td2class'><span>&#9998;</span></td>
                    <td className='td2class'><input type='checkbox' class='check'></input></td>
                    <td className='td2class'><span>&#10060;</span></td>
                </tr>
            )}
        </table>
      </div>
    )
}
export default Todo;