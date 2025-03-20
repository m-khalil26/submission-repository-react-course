import { useEffect, useState } from 'react'
import axios from 'axios'

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
 <div>{props.persons.map((person) => <p key={person.id}>{person.name}  {person.number}</p>)}</div>
)

}

const App = () => {
  const [persons, setPersons] = useState([])

  const[filteredPersons, setFiltered] = useState(persons)
  const [newName, setNewName] = useState('')
  const[newPhoneNumber,setNewPhoneNumber] = useState('')
  const[searchValue, setSearchValue] = useState('')

  const hook = ()  =>{
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('data ',response.data)
      setPersons(response.data)
      setFiltered(response.data)
      
    } )
  }
  useEffect(hook,[])
  
  const handleSubmit = (event) => {
    (persons.find(person => person.name===newName))===undefined ? setPersons(persons.concat({ name: newName ,number : newPhoneNumber})) : alert(`${newName} is already taken.`)
    setFiltered(persons.concat({ id:persons.length+1,name: newName ,number : newPhoneNumber}))
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