import { useState } from 'react'


const Statistics = (props) => {
  return (
    <p> {props.type} {props.value}</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick = {() =>  setGood(good+1)}>Good</button>
      <button onClick = {() =>  setNeutral(neutral+1)} >Neutral</button>
      <button onClick = {() =>  setBad(bad+1)} text = "bad">Bad</button>

      <Statistics type = "Good" value = {good}/>
      <Statistics type = "Neutral" value = {neutral}/>
      <Statistics type = "Bad" value = {bad}/>
    </div>
  )
}

export default App