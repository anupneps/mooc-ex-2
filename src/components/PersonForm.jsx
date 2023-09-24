import React, { useState } from 'react';
import '../styles.css'

const PersonForm = ({ handleClick }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    return (
        <form>
            <div className='input-box'>
                Name: <input value={name} onChange={(e) => setName(e.target.value)} />
                Number: <input value={number} onChange={(e) => setNumber(e.target.value)} />
                <button type='submit' onClick={(e) => {
                    handleClick(e, name, number)
                    setName('')
                    setNumber('')
                }
                }  >add</button>
            </div>
        </form>
    )
}

export default PersonForm;
