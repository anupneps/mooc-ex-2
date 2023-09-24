import React, { useState, useEffect } from "react";

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import initialData from "./data";
import "./styles.css";


const App = () => {
  const [persons, setPersons] = useState(initialData)
  const [search, setSearch] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    if (search === '') {
      setFilteredPersons(persons)
    }
    const filtered = persons.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPersons(filtered);
  }, [search, persons]);


  /** 
   *  @param {Event} e - The click event triggered by the 'add' button. 
   *  @param {string} name - The name of the new person to be added.
   *  @param {string} number - The phone number fo the new person to be added.
  */
  const handleClick = (e, name, number) => {
    e.preventDefault()
    const updatedPerson = {
      name: name,
      number: number
    }

    if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to the phonebook`)
      return;
    }

    setPersons((prev) => [...prev, updatedPerson])
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <h1>PhoneBook</h1>
      <PersonForm handleClick={handleClick} />
      <Filter handleSearch={handleSearch} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App