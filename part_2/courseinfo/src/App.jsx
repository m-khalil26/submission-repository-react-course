const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Course = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
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
  let total = 0;
  return (<p>Total of {props.course.parts.map(part => total += part.exercises)[props.course.parts.length - 1]} exercices</p>)

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Redux',
        exercises: 4,
        id: 4
      }
      ,
      {
        name: 'State of a component 2 ',
        exercises: 5,
        id: 5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
