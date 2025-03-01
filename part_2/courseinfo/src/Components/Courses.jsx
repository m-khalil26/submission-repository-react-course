const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Course = (props) => {
  return (
    <div>
      <Header course = {props.course.name}/>
      <ul>
        {props.course.parts.map(part =>
          <li key={part.id}>
            <Part name={part.name} exercises={part.exercises} />
          </li>
        )}
      </ul>
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const total = parts.reduce((somme, parts) => { return somme + parts.exercises }, 0)
  return (<p>Total of {total} exercices</p>)

}

const Courses = (props) => {
  return props.courses.map((course) => <div key = {course.id} ><Course course={course} /><Total course={course} /></div>)
}


export default Courses