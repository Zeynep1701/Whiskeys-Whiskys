import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CountBottles from "../components/CountBottles";

function CartPage() {
  const [addedWhiskey, setAddedWhiskey] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const [bottles, setBottles] = useState(1);
  const [whiskeyCounts, setWhiskeyCounts] = useState(null);

  const fetchCart = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`);
    if (response.ok) {
      const allWhiskeysAdded = await response.json();

      const initialCounts = allWhiskeysAdded.reduce((acc, whiskey) => {
        acc[whiskey.id] = 1;
        return acc;
      }, {});
      setWhiskeyCounts(initialCounts);

      setAddedWhiskey(allWhiskeysAdded);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [])

  useEffect(() => {
    if (whiskeyCounts) {
    const newTotalPrice = addedWhiskey?.reduce((acc, whiskey) => {
      return acc + whiskey.price * whiskeyCounts[whiskey.id];
    }, 0);
    console.log(newTotalPrice)
    setTotalPrice(newTotalPrice.toFixed(2));}
  }, [addedWhiskey, whiskeyCounts]);

  const handleDelete = async (whiskeyId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cart/${whiskeyId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const currentWhiskey = await response.json();
        const filteredWhiskeys = addedWhiskey.filter((oneWhiskey)=>{
          return oneWhiskey.id !== whiskeyId
        })
        setAddedWhiskey(filteredWhiskeys)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cartPage">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {addedWhiskey?.map((whiskey) => (
          <li className="cartList"
            key={whiskey.id}
          >
            <Link to={`/whiskeys/${whiskey.id}`}>
              <img src={whiskey.image} style={{ height: "200px" }} />
              <h3>{whiskey.name}</h3>
              <h4>Price: {whiskey.price} €</h4>
            </Link>

            <div>
              <CountBottles
                whiskeyId={whiskey.id}
                bottles={whiskeyCounts[whiskey.id]}
                setBottles={(count) =>
                  setWhiskeyCounts((prevCounts) => ({
                    ...prevCounts,
                    [whiskey.id]: count,
                  }))
                }
              />
            </div>

            <Link>
              <button className="deleteButton"
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
        {<h2>Total: {totalPrice} €</h2>}
        <button className="paymentButton"
          type="submit"
          onClick={() => {
            alert(
              `Oops! It seems like you don't have enough whiskey. I'm sure you want some more. Go back and take a closer look to our offers!`
            );
          }}
        >
          Start payment
        </button>
      </div>
    </div>
  );
}

export default CartPage;
