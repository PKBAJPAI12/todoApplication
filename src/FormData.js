import React from 'react';
function FormData(props){
    return(<>
    <table>
        <thead>
        <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Address</th>
            <th>User Phone Number</th>
        </tr>
        </thead>
        <tbody>
            {props.element.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phoneno}</td>
            </tr>
            )}
        </tbody>
    </table>
    </>)
}
export default FormData;