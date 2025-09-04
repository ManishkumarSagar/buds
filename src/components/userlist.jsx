import '../css/userlist.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Userlist= ()=>{
    const navigate= useNavigate();
    const [userdata,setuserdata]= useState('');
    const getuserdata= ()=>{
        axios.get('http://localhost:1000/user/userlist').then((response)=>{
            console.log(response.data.message);
            setuserdata(response.data.message);
        });
    }
    const handleDelete= (id)=>{
        axios.delete("http://localhost:1000/user/deleteuser/"+id).then((response)=>{
            console.log(response);
            getuserdata();
        })
    }
    const handleEdit= (id)=>{
        console.log(id);
        navigate('/update/'+id);
    };
    
    useEffect(()=>{
        getuserdata();
    },[])

    return(
        <>
            <h2>HTML Table</h2>
            <table>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {userdata && userdata.map((user)=>(
                <tr>
                    <td>{user._id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td><input type='button' value="Delete" onClick={()=>{handleDelete(user._id)}}/>
                    <input type='button' value="Edit" onClick={()=>{handleEdit(user._id)}}/>
                    </td>
                </tr>
            ))}
            </table>
        </>
    )
}
export default Userlist;