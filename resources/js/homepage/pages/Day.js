import { useEffect, useState } from "react"
import axios from "axios";
function Day(props) {

    const [date, setDate] = useState(props.date ? props.date : "2022-07-13")
    const [rate, setRate] = useState([])
   
    const printDay = async () =>{
        const response = await axios.get('/api/day?date='+date)
        
        console.log(response.data)
        //setDate(response)
    }

    useEffect(()=> {
      printDay()
    },[])

    const printData = async () =>{
      const response = await axios.get('/api/day')
      console.log(response)
      // setDate(response)
  }
    
  
  return (
   <div>
     <div><h1>Today - {date}</h1></div>
     <div><h1>picture - </h1></div>
        <div>             
         <div><h2>Here’s your notes of the day- </h2></div>
         <div><h3>This day’s rate from 0 to 10</h3></div>
         <div><h4>Here’s your ideas and insights</h4></div>
         <div><h4>Here’s your gratitude</h4></div>
        </div>  
   </div>
  )
}

export default Day
