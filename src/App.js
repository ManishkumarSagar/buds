import logo from './logo.svg';
import './App.css';
//import Home from './components/home';
import Homepage from './pages/homepage';
import Registerpage from './pages/registerpage';
import Userlistpage from './pages/userlistpage';
import Prop from './components/prop';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    {/* {<Home/>}
    {/* {<Homepage/>} */}
    {/* {<Registerpage/>} */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/update/:id' element={<Registerpage/>}/>
        <Route path='/login' element={<Registerpage/>}/>
        <Route path='/userlist' element={<Userlistpage/>}/>
        <Route path='/prop' element={<Prop/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
