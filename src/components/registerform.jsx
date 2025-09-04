import '../css/registerform.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useLocation,useParams,useNavigate } from 'react-router-dom';
const Registerform= ()=>{
    const[form_name,setformname]= useState('Register Form');
    const[button_name,setbuttonname]= useState('Register');
    const[form_message,getformmessage]= useState('');
    const[fullname,setfullname]= useState('');
    const[email,setemail]= useState('');
    const[mobileno,setmobileno]= useState('');
    const[password,setpassword]= useState('');
    const navigate= useNavigate();
    const params= useParams('');
    console.log(params.id);
    const location= useLocation();
    const url= location.pathname.split('/');
    console.log(url[1]);
    useEffect(()=>{
        if(url[1]== 'update'){
        setformname('Update Form');
        setbuttonname('Update');
        getsingleuser(params.id);
    };
    if(url[1]== 'login'){
        setformname('Login');
        setbuttonname('login');
        getformmessage('');
    };
    });

    const handlefullname= (event)=>{
        setfullname(event.target.value)
    };
    const handleemail= (event)=>{
        setemail(event.target.value)
    };
    const handlemobileno= (event)=>{
        setmobileno(event.target.value)
    };
    const handlepassword= (event)=>{
        setpassword(event.target.value)
    };

    const getsingleuser= (id)=>{
        axios.get('http://localhost:1000/user/singleuserlist/'+params.id).then((response)=>{
            console.log(response.data.message);
            setfullname(response.data.message.firstname);
            setfullname(response.data.message.lastname);
            setemail(response.data.message.email);
            setmobileno(response.data.message.mobileno);
            setpassword(response.data.message.password);
        })
    };

    const handleSubmit= (event)=>{
        event.preventDefault();
        if(fullname== ''){
            getformmessage('check your fullname input')
        }else
        if(email== ''){
            getformmessage('check your email input')
        }else
        if(mobileno== ''){
            getformmessage('check your mobileno input')
        }else
        if(password== ''){
            getformmessage('check your password input')
        }else{
        let registerdata= {fullname:fullname, email:email, mobileno:mobileno, password:password};
        axios.post('http://localhost:1000/user/registration',registerdata).then((response)=>{
            console.log(response);
            getformmessage('Data Sent Successfully!');
            setfullname('');
            setemail('');
            setmobileno('');
            setpassword('');
        });
        navigate('/login');
        };
    };

    return(
        <>
        <div id="granddiv">
            <div class="headingh2">{form_message}</div>
            <div class="heading">{form_name}</div>
            <form class="detailsinputs">
                <table>
                <tr>
                    <td><label for="fullname">Fullname :</label></td>
                    <td><input type="text" placeholder="fullname" class="regmanp" value={fullname} onChange={handlefullname}/></td>
                </tr>
                <tr>
                    <td><label for="email">Email :</label></td>
                    <td><input type="text" placeholder="email" class="regmanp" value={email} onChange={handleemail}/></td>
                </tr>
                <tr>
                    <td><label for="mobileno">Mobileno :</label></td>
                    <td><input type="text" placeholder="mobileno" class="regmanp" value={mobileno} onChange={handlemobileno}/></td>
                </tr>
                <tr>
                    <td><label for="password">Password :</label></td>
                    <td><input type="text" placeholder="password" class="regmanp" value={password} onChange={handlepassword}/></td>
                </tr>
                <tr>
                    <td><input type="Submit" class="regformpb" value={button_name} onClick={handleSubmit}/></td>
                </tr> 
                </table>
            </form>
        </div>
        </>
    )
}
export default Registerform;