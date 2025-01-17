import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props)
{

    const users = props.users
    const setusers = props.setusers

    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)

    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounder-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here  : )</p>

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

                <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 border rounded-md"
                placeholder="confirm password"/>

                <buton className="bg-[#f0b30d] w-24 p-1 rounded-md" onClick = {addUser}>
                    Sign Up
                </buton>
                
                <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
                </div>
            </div>

        </div>
    )
}


export default Signup