import { event } from '@subsquid/evm-abi'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phonenumber:'0769207714'}
  ])
  const [newName, setNewName] = useState('')

  const[newPhonenumber,setNewPhonenumber] = useState('')

  const handleSubmit = (event) => {
    (persons.find(person => person.name===newName))===undefined ? setPersons(persons.concat({ name: newName ,phonenumber : newPhonenumber})) : alert(`${newName} is already taken.`)
    setNewName('')
    setNewPhonenumber('')
    event.preventDefault()
  }


  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhonenumberChange = (event) => {
    setNewPhonenumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
        phonenumber: <input value={newPhonenumber} onChange={handlePhonenumberChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person) => <p key={person.name.concat(Math.random(2*5))}>{person.name}  {person.phonenumber}</p>)}</div>

    </div>
  )
}

export default App