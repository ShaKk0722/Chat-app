// import { useState } from 'react'
import './App.css'
import Home from './page/home/home';
import Login from './page/login/login';
import Register from './page/register/register';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home />
    </div>
  );
}

export default App
