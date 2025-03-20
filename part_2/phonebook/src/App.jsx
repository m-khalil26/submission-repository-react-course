import { useState } from 'react'

const Filter = props => {
  return (
      <form >
        <div>
          search: <input value={props.value} onChange={props.handle} />
        </div>
      </form>
  )
}

const PersonForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.handleChange} />
        </div>
        <div>
        phone number: <input value={props.newPhoneNumber} onChange={props.handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}

const Persons = props =>{
 return( 
 <div>{props.persons.map((person) => <p key={person.id}>{person.name}  {person.phonenumber}</p>)}</div>
)

}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phonenumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122', id: 4 }
  ])

  const[filteredPersons, setFiltered] = useState(persons)
  const [newName, setNewName] = useState('')
  const[newPhoneNumber,setNewPhoneNumber] = useState('')
  const[searchValue, setSearchValue] = useState('')

  const handleSubmit = (event) => {
    (persons.find(person => person.name===newName))===undefined ? setPersons(persons.concat({ name: newName ,phonenumber : newPhoneNumber})) : alert(`${newName} is already taken.`)
    setFiltered(persons.concat({ name: newName ,phonenumber : newPhoneNumber}))
    setNewName('')
    setNewPhoneNumber('')
    event.preventDefault()
  }

  const handleSearch =(event) =>{
    setSearchValue(event.target.value)
    setFiltered(persons.filter(person => person.name.startsWith(event.target.value)))
  }
  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <Filter value={searchValue} handle={handleSearch} />

      <h2>Add new</h2>
      <PersonForm 
        newName={newName}
        handleChange={handleChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        handleSubmit={handleSubmit}/>

      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App