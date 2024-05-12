import {useState} from "react"

function AddTodoForm(props)
{
  const activityArr = props.activityArr
  const setactivityArr = props.setactivityArr

  const [newactivity,setNewactivity] = useState("")

  function handleChange(evt)
  {
    setNewactivity(evt.target.value)
  }

  function addactivity()
  {
    setactivityArr ([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    setNewactivity("")
  }


  return(
    <div className="flex flex-col gap-3">
           <h1 className="text-2xl font-medium">Manage Activities</h1>
           
           <div>
           <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1 " placeholder="Next Activitiy?"/>
           <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
           </div> 
        </div>
  )  
}



export default AddTodoForm