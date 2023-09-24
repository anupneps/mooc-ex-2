import React from 'react'
import '../styles.css'

const Persons = ({ filteredPersons }) => {
    return (
        <div className="phonebook">
            {filteredPersons.map((p, i) => (
                <p key={i}>{p.name} <span className='phoneNo'>{p.number}</span> </p>
            ))}
        </div>
    )
}

export default Persons