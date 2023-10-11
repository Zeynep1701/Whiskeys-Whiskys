import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate, useParams,} from "react-router-dom";

function UpdateWhiskeyNotes() {
  const [userName, setUserName] = useState("");
  const [nose, setNose] = useState("");
  const [taste, setTaste] = useState("");
  const [finish, setFinish] = useState("");

  const navigate = useNavigate()

  const {noteId} = useParams()

  const fetchUserNotes = async () => {
    try {const response = await fetch(`${import.meta.env.VITE_API_URL}/userNotes/${noteId}`)

    if (response.ok) {
        const parsed = await response.json()
        console.log(parsed)
        setUserName(parsed.userName)
        setNose(parsed.nose)
        setTaste(parsed.taste)
        setFinish(parsed.finish)


    }}
    catch (error) {
        console.log(error)
    }}
  
  const handleUpdate = async (event) => {
    event.preventDefault()
    const payload = { userName, nose, taste, finish };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/userNotes/${noteId}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const currentNote = await response.json();
        console.log(currentNote)
        navigate(`/whiskeys/${currentNote.whiskeyId}`)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserNotes()
  }, []);

  return (
    <div className='updateContainer'>
    <form onSubmit={handleUpdate}>
      <label className='updateForm'>
        User name: 
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label className='updateForm'>
        Nose: 
        <input value={nose} onChange={(event) => setNose(event.target.value)} />
      </label>
      <label className='updateForm'>
        Taste: 
        <input
          value={taste}
          onChange={(event) => setTaste(event.target.value)}
        />
      </label>
      <label className='updateForm'>
        Finish: 
        <input
          value={finish}
          onChange={(event) => setFinish(event.target.value)}
        />
      </label>
      <button type="submit">Edit your notes</button>
    </form>
    </div>
  );
}

export default UpdateWhiskeyNotes;
