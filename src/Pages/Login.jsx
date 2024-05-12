
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props)
{
    const  navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)
     
    const users = props.users
    

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)

    }

    function CheckUser()
    {

        var userfound = false

        users.forEach(function(item)


    {
        if(item.username === eusername && item.password === epassword)
            {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
          
    })

    if(userfound===false)
    {
        console.log("login failed")
        setRuser(false)
    }
    }
 

    return(
        <div>
           <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounder-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser? <p>Ihelp you manage your activities after you login : )</p>:<p className="text-red-400">Plese Sign Up Before you Login ??</p>}
               

                <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 border rounded-md"
                placeholder="username"
                onChange={handleUInput}/>
                </div>

                <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 border rounded-md"
                placeholder="password"
                onChange={handlePInput}/>
                </div>

                <buton className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={CheckUser}>
                    Login
                </buton>
                
                <p>Don't have an account? <Link to={'/Signup'} className="underline">Signup</Link></p>
               
            </div>

        </div>
        </div>
    )
}



export default Login