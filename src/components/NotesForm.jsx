import { useEffect, useState } from 'react'

const notesForm = ({whiskeyId, fetchAWhiskey}) => {
    const [userName, setUserName] = useState("")
    const [nose, setNose] = useState("")
    const [taste, setTaste] = useState("")
    const [finish, setFinish] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const payload = { userName, nose, taste, finish, whiskeyId }
    
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/userNotes/`, {
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
            setUserName("")
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
            User name: 
            <input value={userName} onChange={event => setUserName(event.target.value)} />
          </label>
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

export default notesForm;

