import './App.css';
import Login from './components/login';
import Price from './components/price';
import Register from './components/register';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
  
     <>
   <Routes>
    <Route index element={<Register/>} ></Route>
    <Route path="login" element={<Login/>} ></Route>
   </Routes>
     <Price/>
     </>
   
  );
}

export default App;
