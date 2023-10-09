import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function HomePage() {
  const [whiskeys, setWhiskeys] = useState([]);
  const [whiskeyId, setWhiskeyId] = useState();

  const fetchAllWhiskeys = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/whiskeys`);
    if (response.ok) {
      const allWhiskeys = await response.json();
      setWhiskeys(allWhiskeys);
      console.log(allWhiskeys);
    }
  };
  useEffect(() => {
    fetchAllWhiskeys();
  }, []);

  const handleAddToCart = async whiskey => {
    console.log(whiskey)
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/cart/`,
            {
                method: 'POST',
                body: JSON.stringify(whiskey),
                headers: {
                    'Content-type': 'application/json',
                },
            }
        )
       
        if (response.ok) {
            const currentWhiskey = await response.json()
            console.log(currentWhiskey)

        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <div>
          <p className="welcomeText">
            Welcome to a splendid journey where exquisite flavors meet timeless
            traditions. At Whiskeys & Whiskys, we take pride in curating a
            selection of the finest whiskeys from around the world, each with
            its own unique tale and character. From the rich, peaty aromas of
            Scottish malts to the smooth and subtle notes of Irish blends, our
            collection promises to enchant both the seasoned connoisseur and the
            curious beginner. Navigate through our exclusive whiskey library,
            uncover hidden gems, and allow your palate to embark on an
            unparalleled adventure of spirit and heritage. Cheers to discovering
            your next favorite pour!
          </p>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplate: "auto / repeat(3, 1fr)",
          gap: "1rem",
          padding: "0 1rem",
        }}
      >
        {whiskeys.map((whiskey) => (
          <li key={whiskey.id}
            style={{
              padding: "1rem",
              borderRadius: "12px",
              boxShadow: "1px 2px 7px 2px black",
            }}
          >
            <Link to={`/whiskeys/${whiskey.id}`}>
              <img src={whiskey.image} style={{ height: "200px" }} />
              <h3>{whiskey.name}</h3>
              <p>Origin: {whiskey.origin}</p>
              <p>Age: {whiskey.age}</p>
              <p>Price: {whiskey.price} €</p>
            </Link>
            <Link><button onClick={()=>{handleAddToCart(whiskey)}}>Add to the cart</button></Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to={"/whiskeys/new"}>
          <h3>Couldn't find the whiskey you wanted?</h3>
          <p>
            Click here to make a request of your favorite whiskey and we will
            get it for you
          </p>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
