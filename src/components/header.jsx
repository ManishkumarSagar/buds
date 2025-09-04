import '../css/header.css';
import { useNavigate } from 'react-router-dom';
const Header= ()=>{
    const navigate= useNavigate();
    return(
        <>
        <div id="navbar-parent">
            <div id="logo">Uncodemy.com</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox-toggle"/>
                <label for="checkbox-toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li><a onClick={()=>{navigate('/')}}>Home</a></li>
                    <li><a onClick={()=>{navigate('/register')}}>Register</a></li> 
                    <li><a onClick={()=>{navigate('/userlist')}}>Userlist</a></li>
                </div>
            </ul>
        </div>
        </>
    )
}
export default Header