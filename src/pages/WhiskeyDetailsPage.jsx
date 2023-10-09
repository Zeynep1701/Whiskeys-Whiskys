import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import NotesForm from '../components/NotesForm.jsx'
function WhiskeyDetailsPage() {
    const [whiskey, setWhiskey] = useState(null)
    const [whiskey2, setWhiskey2] = useState(null)
    const [userName, setUserName] = useState("")
    const [nose, setNose] = useState("")
    const [taste, setTaste] = useState("")
    const [finish, setFinish] = useState("")


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

    // const handleUpdate = async (whiskeyId) => {
    //     const payload = { userName, nose, taste, finish, whiskeyId }
    //     try {
    //       const response = await fetch(`${import.meta.env.VITE_API_URL}/userNotes/${whiskeyId}`, {
    //         method: "PUT",
    //         body: JSON.stringify(payload),
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //       });
    
    //       if (response.ok) {
    //         const currentNote = await response.json();
    
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   useEffect(() => {
        
    // }, [])
    
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
                            {/* <button onClick={() => {handleUpdate(whiskey2.id)}}>Edit</button> */}
                        </li>
                        ))}
                    
                
            </ul>
            <NotesForm whiskeyId={whiskey.id} fetchAWhiskey={fetchAWhiskey}/> 
        </>
    )
}

export default WhiskeyDetailsPage;