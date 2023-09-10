import React from 'react';
import "./App.css";
import { useState } from 'react';
function Todo(props){
    //const [input,setInput]=useState("");
    const [data,setData]=useState([]);
   // console.log(`data ${data}`);
    const updateTodo=(num,todo)=>{ 
       // console.log(`data ${data}`);
       props.element.map((item)=>{
        if(item.todono==num){setData(...props.element,{
            todo:`<textarea id='updateta' cols='100' rows='2'>${todo}</textarea>`,
            todono:num,
            update:`<span>&#9998;</span>`,
            status:`<input type='checkbox' class='check'>`,
            delete:`<span>&#10060;</span>`
        })}
       })
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
    const handleKey=(e,i,num)=>{
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
                    <td onKeyDown={(e)=>{handleKey(e,e.target.value,item.todono)}} dangerouslySetInnerHTML={{__html: item.todo}} className='td1class'/>
                    <td onClick={()=>{updateTodo(item.todono,item.todo)}} dangerouslySetInnerHTML={{__html: item.update}} className='td2class'/>
                    <td dangerouslySetInnerHTML={{__html: item.status}} className='td2class'/>
                    <td dangerouslySetInnerHTML={{__html: item.delete}} className='td2class'/>
                </tr>
            )}
        </table>
      </div>
    )
}
export default Todo;