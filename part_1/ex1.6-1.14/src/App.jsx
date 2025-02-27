import { useState } from 'react'


const Statistic = (props) => {
  return (
    <p> {props.type} {props.value}</p>
  )
}
const Statistics = (props) => {
  return (
    <div>
      {props.types.map((type_name,index) => (
        <Statistic type = {type_name} value = {props.values[index]}/>  
      ))}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal]= useState(0)
  const [average,setAverage]= useState(0)
  const [positiveFb,setPositiveFb]= useState(0)

  const types=[good,neutral,bad,total,average,positiveFb]
  const type_names= ["good","neutral","bad","total","average","positiveFb"]

  const handleClick = (type) => () =>{
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
    const updatedTotal = total+1
    setTotal(updatedTotal)
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
      <Statistics types = {type_names} values = {types}/>

    </div>
  )
}

export default App