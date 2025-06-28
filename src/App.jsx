import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route ,Routes} from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div className="bg-slate-900">   {/* Navbar static hai isliye isko Routes me nhi likha jo dynamic hai i.r kisi pe click krke wo components pe jana pdta hai here cart , Home etc so usko pages ka folder bna ke uske ander likho  */}
        <Navbar/> 
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

    </div>
  )
}

export default App
