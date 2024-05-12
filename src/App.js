
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import { useState} from "react";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App()
{
  
  const [users,setusers] = useState(
    [
        {
            username:"sivam",
            password:"123"
        },
        {
            username:"abc",
            password:"123"
        }
    ]
)

  return(
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}/>
        <Route path='Signup' element={<Signup users={users} setusers={setusers}/>}/>
        <Route path='/landing' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
</div> 
  )
}

export default App