import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    setNewName('')
    return(setPersons(persons.concat({name: newName}))
  )
  }

  const handlePersonChange = (event) => (
    setNewName(event.target.value)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {persons.map((person, i) => <li key={i}> {person.name} </li>)}
      </ul>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
