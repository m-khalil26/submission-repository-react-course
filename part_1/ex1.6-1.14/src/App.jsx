import { useState } from 'react'


const Statistics = (props) => {
  return (
    <p> {props.type} {props.value}</p>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal]= useState(0)
  const [average,setAverage]= useState(0)
  const [positiveFb,setPositiveFb]= useState(0)

  const handleClick = (type) => () =>{
    console.log("type clicked ", {type})
    let updatedGood = good
    let updatedNeutral = neutral
    let updatedBad = bad

    switch(type){
      case "Good":
        updatedGood =         updatedGood + 1
        setGood(updatedGood)
        break
      case "Neutral":
        updatedNeutral =         updatedNeutral + 1
        setNeutral(updatedNeutral)
        break
      case "Bad":
        updatedBad=         updatedBad + 1

        setBad(updatedBad)
        break
    }
    console.log("total", {total})
    const updatedTotal = total+1
    setTotal(updatedTotal)
    console.log("total after ", {updatedTotal})
    console.log("goodbefore", {good})
    console.log("good after",{updatedGood})
    console.log("bad", {bad})

    setAverage(getPercentage(updatedGood-updatedBad,updatedTotal))
    setPositiveFb(getPercentage(updatedGood,updatedTotal))
  }


  const getPercentage = (value,total) => () => {
    return total !=0 ?value/ total:0
  }

  
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick = {handleClick("Good")}>Good</button>
      <button onClick = {handleClick("Neutral")}>Neutral</button>
      <button onClick = {handleClick("Bad")} >Bad</button>

      <Statistics type = "Good" value = {good}/>
      <Statistics type = "Neutral" value = {neutral}/>
      <Statistics type = "Bad" value = {bad}/>
      <Statistics type = "Total" value = {total}/>
      <Statistics type = "Average" value = {average}/>
      <Statistics type = "Positive" value = {positiveFb}/>

    </div>
  )
}

export default App