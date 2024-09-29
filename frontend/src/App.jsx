import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Components/pages/LandingPage';
import LoginPage from './Components/pages/LoginPage';
import SignUpPage from './Components/pages/SignUpPage';


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Routes>
      <Route path={"/"} element={<LandingPage/>}/>
      <Route path={"/login"} element={<LoginPage/>}/>
      <Route path={"/signup"} element={<SignUpPage/>}/>

    </Routes>
  </>
  )
}

export default App;
