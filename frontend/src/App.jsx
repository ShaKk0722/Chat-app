// import { useState } from 'react'
import './App.css'
import Home from './page/home/home';
import Login from './page/login/login';
import Register from './page/register/Register';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)
  const { authUser } = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/register" element={authUser ? <Navigate to = "/" /> : <Register />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
