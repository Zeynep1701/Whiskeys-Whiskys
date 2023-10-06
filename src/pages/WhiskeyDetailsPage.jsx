import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import GetNotes from '../components/getNotes.jsx'
function WhiskeyDetailsPage() {
    const [whiskey, setWhiskey] = useState(null)
    const { whiskeyId } = useParams();
    const fetchAWhiskey = async () => {
        try {const response = await fetch(`${import.meta.env.VITE_API_URL}/whiskeys/${whiskeyId}?_embed=notes`)

        if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            setWhiskey(parsed)

        }}
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAWhiskey()
    }, [])

    if (whiskey === null){
        return <p>Loading...</p>
    }
    
    return (
        <>
            <img src={whiskey.image} style={{ height: "200px" }} />
            <h1>{whiskey.name}</h1>
            <p>Origin: {whiskey.origin}</p>
            <p>Age: {whiskey.age}</p>
            <p>Price: {whiskey.price}</p>
            <p>Description: {whiskey.description}</p>
            <h3>Notes:</h3>
            <ul>
                {whiskey && whiskey.notes.map(note =>(
                    <li key={note.id}>
                        <p>{note.nose}</p>
                        <p>{note.taste}</p>
                        <p>{note.finish}</p>
                    </li>
                    
                ))}
            </ul>
            <GetNotes whiskeyId={whiskey.id} fetchAWhiskey={fetchAWhiskey}/> 
        </>
    )
}

export default WhiskeyDetailsPage;