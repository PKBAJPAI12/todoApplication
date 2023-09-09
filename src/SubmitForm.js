import React from "react";
import { useState } from "react";
import FormData from "./FormData";
function SubmitForm() {
  const [myname, setName] = useState("");
  const [myemail, setEmail] = useState("");
  const [myaddress, setAddress] = useState("");
  const [myphone, setPhone] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
   // e.preventDeafult();
    if (myname.length >= 5 && myname.length <= 20) {
      if (myphone.length === 10) {
        let randNumber = Math.floor(10000 + Math.random() * 10000);
        let arr = [];
        arr.push(...data, {
          id: randNumber,
          name: myname,
          email: myemail,
          address: myaddress,
          phoneno: myphone,
        });
        setData(arr);
        alert("User Signup Successfully");
      } else {
        alert("Phone Number should be 10 digit");
      }
    } else {
      alert("User Name should be greater than equal 5 and less than equal 20");
    }
  };
  return (
    <>
      <h2>User Form</h2>
      <label>Enter Name</label>
      <input
        type="text"
        value={myname}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Enter Email</label>
      <input
        type="text"
        value={myemail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Enter Address</label>
      <input
        type="text"
        value={myaddress}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <label>Enter Phone Number</label>
      <input
        type="text"
        value={myphone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <FormData element={data} />
    </>
  );
}
export default SubmitForm;
