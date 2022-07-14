import { useState } from "react"
function RandomDay() {
    const [entry,setEntry] = useState({
        
        date:"",
        rate: "0",
        note: "",
        picture: "",


    });
    const printDay = async (e) =>{
        e.preventDefault()
        const response = await axios.get('/user/day', entry)
    }
  
  return (
   <div>
     <div><h1>Today</h1></div>
     <div><h1>picture</h1></div>
        <div>             
         <div><h2>Here’s your notes of the day </h2></div>
         <div><h3>This day’s rate from 0 to 10</h3></div>
         <div><h4>Here’s your ideas and insights</h4></div>
         <div><h4>Here’s your gratitude</h4></div>
        </div>  
   </div>
  )
}

export default RandomDay
