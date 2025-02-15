


const Header = (props) => {
  return(
  <h1> {props.coursename} </h1>
  )
}

const Total = (props) => {
  console.log(props)
  return  (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )

}


const Part = (props) => {
  return (
    <p> {props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (<>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
      </>
  )
}

const App = () => {

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
  
const part3 = 'State of a component'
const exercises3 = 14
  
  return (
    <>
      <Header coursename = {course} />
      <Content exercises1= {exercises1} part1={part1} exercises2={exercises2} part2={part2} exercises3={exercises3} part3={part3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </>
  )
}

export default App