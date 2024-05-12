function Todoitem(props)
{
   const activityArr = props.activityArr
   const setactivityArr =props.setactivityArr 
   
   function handleDelete(deleteid)
   {
     var temprr =activityArr.filter(function(item){
        if(item.id === deleteid)
            {
                return false
            }
            else{
                return true
            }
     })

     setactivityArr(temprr)
   }

   return(
    <div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
    <button className="text-red-500" onClick={()=>{handleDelete(props.id)}}>DElete</button>
    </div>
   ) 
}



export default Todoitem