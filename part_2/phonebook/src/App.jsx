import { event } from '@subsquid/evm-abi'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phonenumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122', id: 4 }
  ])

  const[filteredPersons, setFiltered] = useState(persons)
  const [newName, setNewName] = useState('')
  const[newPhonenumber,setNewPhonenumber] = useState('')
  const[searchValue, setSearchValue] = useState('')

  const handleSubmit = (event) => {
    (persons.find(person => person.name===newName))===undefined ? setPersons(persons.concat({ name: newName ,phonenumber : newPhonenumber})) : alert(`${newName} is already taken.`)
    setFiltered(persons.concat({ name: newName ,phonenumber : newPhonenumber}))
    setNewName('')
    setNewPhonenumber('')
    event.preventDefault()
  }

  const handleSearch =(event) =>{
    setSearchValue(event.target.value)
    setFiltered(persons.filter(person => person.name.startsWith(event.target.value)))
  }
  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhonenumberChange = (event) => {
    setNewPhonenumber(event.target.value)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <form >
        <div>
          search: <input value={searchValue} onChange={handleSearch} />
        </div>
      </form>

      <h2>Add new</h2>
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
      <div>{filteredPersons.map((person) => <p key={person.id}>{person.name}  {person.phonenumber}</p>)}</div>

    </div>
  )
}

export default App