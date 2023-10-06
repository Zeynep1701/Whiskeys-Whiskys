import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'

const getNotes = ({whiskeyId, fetchAWhiskey}) => {
    const [nose, setNose] = useState([])
    const [taste, setTaste] = useState([])
    const [finish, setFinish] = useState([])

    const handleSubmit = async event => {
        event.preventDefault()
        const payload = { nose, taste, finish, whiskeyId }
    
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/notes`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-type': 'application/json',
            },
          })
          console.log(response)
          if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            fetchAWhiskey()
            setNose("")
            setTaste("")
            setFinish("")
          }
        } catch (error) {
          console.log(error)
        }
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Nose: 
            <input value={nose} onChange={event => setNose(event.target.value)} />
          </label>
          <label>
            Taste: 
            <input value={taste} onChange={event => setTaste(event.target.value)} />
          </label>
          <label>
            Finish: 
            <input value={finish} onChange={event => setFinish(event.target.value)} />
          </label>
          <button type='submit'>Add your notes</button>
        </form>
      )
}

export default getNotes;

