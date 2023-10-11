import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";
import NotesForm from "../components/NotesForm.jsx";

function WhiskeyDetailsPage() {
  const [whiskey, setWhiskey] = useState(null);
  const [whiskey2, setWhiskey2] = useState(null);
  const navigate = useNavigate();

  const { whiskeyId } = useParams();
  const fetchAWhiskey = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/whiskeys/${whiskeyId}?_embed=notes`
      );

      const response2 = await fetch(
        `${import.meta.env.VITE_API_URL}/whiskeys/${whiskeyId}?_embed=userNotes`
      );

      if (response.ok && response2.ok) {
        const parsed = await response.json();
        const parsed2 = await response2.json();
        console.log(parsed);
        console.log(parsed2);
        setWhiskey(parsed);
        setWhiskey2(parsed2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAWhiskey();
  }, []);

  if (whiskey === null) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = async (whiskey) => {
    console.log(whiskey);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/`, {
        method: "POST",
        body: JSON.stringify(whiskey),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const currentWhiskey = await response.json();
        console.log(currentWhiskey);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="whiskeyDetails">
        <img src={whiskey.image} style={{ height: "200px" }} />
        <h2 className="whiskeyName">{whiskey.name}</h2>
        <h4 className="whiskeyOrigin">Origin: {whiskey.origin}</h4>
        <h4 className="whiskeyAge">Age: {whiskey.age}</h4>
        <p className="whiskeyDescription"><strong>Description: </strong>{whiskey.description}</p>
        <h4 className="whiskeyPrice">Price: {whiskey.price} €</h4>
        <Link>
          <button
            onClick={() => {
              handleAddToCart(whiskey);
            }}
          >
            Add to the cart
          </button>
        </Link>
     
      </div>
      <h3>Notes</h3>
      <ul>
        {whiskey.notes &&
          whiskey.notes.map((note) => (
            <li className="notes" key={note.id}>
              <p>
                <strong>Nose:</strong> {note.nose}
              </p>
              <p>
                <strong>Taste:</strong> {note.taste}
              </p>
              <p>
                <strong>Finish:</strong> {note.finish}
              </p>
            </li>
          ))}
        <h4>
          Have you tried this whiskey? Leave us a review of your experience with
          it
        </h4>
        {whiskey2.userNotes &&
          whiskey2.userNotes.map((note) => (
            <li className="userNotes" key={note.id}>
              <p>
                <strong>User:</strong> {note.userName}
              </p>
              <p>
                <strong>Nose:</strong> {note.nose}
              </p>
              <p>
                <strong>Taste:</strong> {note.taste}
              </p>
              <p>
                <strong>Finish:</strong> {note.finish}
              </p>
              <button
                onClick={() => {
                  navigate(`/userNotes/${note.id}`);
                }}
              >
                Edit
              </button>
            </li>
          ))}
      </ul>
      <NotesForm whiskeyId={whiskey.id} fetchAWhiskey={fetchAWhiskey} />
    </>
  );
}

export default WhiskeyDetailsPage;
