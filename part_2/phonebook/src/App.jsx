import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    (persons.find(person => person.name===newName))===undefined ? setPersons(persons.concat({ name: newName })) : alert(`${newName} is already taken.`)
    setNewName('')
    event.preventDefault()
  }

  const handleChange = (event) => {
    setNewName(event.target.value)

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>  {persons.map((person) => <p key={person.name.concat(Math.random(2*5))}>{person.name}</p>)}</div>

    </div>
  )
}

export default App