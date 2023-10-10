import { useEffect, useState,  } from 'react'
import { Link, NavLink, Route, Routes, useParams, useNavigate} from 'react-router-dom'
import NotesForm from '../components/NotesForm.jsx'
import UpdateWhiskeyNotes from './UpdateWhiskeyNotes.jsx'

function WhiskeyDetailsPage() {
    const [whiskey, setWhiskey] = useState(null)
    const [whiskey2, setWhiskey2] = useState(null)
    const navigate = useNavigate()

    const { whiskeyId } = useParams();
    const fetchAWhiskey = async () => {
        try {const response = await fetch(`${import.meta.env.VITE_API_URL}/whiskeys/${whiskeyId}?_embed=notes`)

            const response2 = await fetch(`${import.meta.env.VITE_API_URL}/whiskeys/${whiskeyId}?_embed=userNotes`)

        if (response.ok && response2.ok) {
            const parsed = await response.json()
            const parsed2 = await response2.json()
            console.log(parsed)
            console.log(parsed2)
            setWhiskey(parsed)
            setWhiskey2(parsed2)

        }}
        catch (error) {
            console.log(error)
        }}

    useEffect(() => {
        fetchAWhiskey()
    }, [])

    if (whiskey === null){
        return <p>Loading...</p>
    }

    
    return (
        <>
            <img src={whiskey.image} style={{ height: "200px" }} />
            <h2>{whiskey.name}</h2>
            <p>Origin: {whiskey.origin}</p>
            <p>Age: {whiskey.age}</p>
            <p>Price: {whiskey.price} €</p>
            <p>Description: {whiskey.description}</p>
            <h3>Notes:</h3>
            <ul>
                {whiskey.notes && whiskey.notes.map(note =>(
                    <li key={note.id}>
                        <p>Nose: {note.nose}</p>
                        <p>Taste: {note.taste}</p>
                        <p>Finish: {note.finish}</p>
                    </li>
                    ))}
                    {whiskey2.userNotes && whiskey2.userNotes.map(note =>(
                        <li key={note.id}>
                            <p>User: {note.userName}</p>
                            <p>Nose: {note.nose}</p>
                            <p>Taste: {note.taste}</p>
                            <p>Finish: {note.finish}</p>
                            <button onClick={() => {navigate(`/userNotes/${note.id}`)}}>Edit</button>
                        </li>
                        ))}
                    
                
            </ul>
            <NotesForm whiskeyId={whiskey.id} fetchAWhiskey={fetchAWhiskey}/> 
        </>
    )
}

export default WhiskeyDetailsPage;