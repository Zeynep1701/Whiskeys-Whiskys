import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CartPage() {
  const [addedWhiskey, setAddedWhiskey] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const fetchCart = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`);
    if (response.ok) {
      const allWhiskeysAdded = await response.json();
      setAddedWhiskey(allWhiskeysAdded);

    }
  };
  useEffect(() => {
    fetchCart();

    const newTotalPrice = addedWhiskey?.reduce((acc, whiskey) => {
        return acc + whiskey.price;
      }, 0);
      setTotalPrice(newTotalPrice)

  }, [addedWhiskey]);

  const handleDelete = async (whiskeyId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/${whiskeyId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const currentWhiskey = await response.json();

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ul style= {{
        display: "flex",
        justifyContent: "space-between",
      }}>
        {addedWhiskey?.map((whiskey) => (
          <li
            key={whiskey.id}
            style={{
              padding: "1rem",
            }}
          >
            <Link to={`/whiskeys/${whiskey.id}`}>
              <img src={whiskey.image} style={{ height: "200px" }} />
              <h3>{whiskey.name}</h3>
              <p>Price: {whiskey.price} €</p>
            </Link>
            <Link>
              <button
                onClick={() => {
                  handleDelete(whiskey.id);
                }}
              >
                Delete
              </button>
            </Link>
          </li>
        ))}
      </ul>
        <div>
            {<h3>Total: {totalPrice} €</h3>}
            <button type='submit' onClick={()=>{alert(`I'm sure you want more whiskey. Go back and take a closer look to our offers!`)}}>Start payment</button>
        </div>
    </>
  );
}

export default CartPage;
