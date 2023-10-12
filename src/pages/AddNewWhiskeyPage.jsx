import { useState } from "react";

function AddNewWhiskeyPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      userName,
      email,
      name,
      age,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/whiskeyRequest/`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const currentWhiskey = await response.json();
        console.log(currentWhiskey);
        setUserName("");
        setEmail("");
        setName("");
        setAge("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="addWhiskeyContainer">
      <h3>If you couldn't find your favorite whiskey,</h3>
      <h3>you can request it here and we will contact you as soon as it is available.</h3>
      <form
        onSubmit={onSubmit}
        style={{
          display: "grid",
          gridTemplate: "auto / 1fr",
          justifyItems: "center",
        }}
      >
        <table>
          <tr>
            <td>
              <label className="addWhiskeyForm">User's full name:</label>
            </td>
            <td>
              <input
                type="text"
                name="userName"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="addWhiskeyForm">Email: </label>
            </td>
            <td>
              <input
                type="text"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="addWhiskeyForm">Name of the whiskey:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="addWhiskeyForm">Age of the whiskey:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                onChange={(event) => setAge(event.target.value)}
                value={age}
              />
            </td>
          </tr>
        </table>
        <button
          className="addWhiskeyButton"
          type="submit"
          onClick={() => {
            alert(
              "Thanks for your request! We will get back to you as soon as we want to"
            );
          }}
        >
          Request your whiskey
        </button>
      </form>
    </div>
  );
}

export default AddNewWhiskeyPage;
