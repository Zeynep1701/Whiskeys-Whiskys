import { useState } from "react";

function AddNewWhiskeyPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    

    const onSubmit = async event => {
        event.preventDefault()
        const payload = {
            userName,
            email,
            name,
            age,

        }
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/whiskeyRequest/`,
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            )
            console.log(response)
            if (response.ok) {
                const currentWhiskey = await response.json()
                console.log(currentWhiskey)
                setUserName("")
                setEmail("")
                setName("")
                setAge("")

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} style={{ display: 'grid', gridTemplate: 'auto / 1fr', justifyItems: 'center' }}>
            <label>
                    User's full name:
                    <input type="text" name="userName" onChange={event => setUserName(event.target.value)} value={userName} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" onChange={event => setEmail(event.target.value)} value={email} />
                </label>
                <label>
                    Name of the whiskey:
                    <input type="text" name="name" onChange={event => setName(event.target.value)} value={name} />
                </label>
                <label>
                    Age of the whiskey: 
                    <input type="text" name="name" onChange={event => setAge(event.target.value)} value={age} />
                </label>
                <button type='submit' onClick={()=>{alert('Thanks for your request! We will get back to you as soon as we want to')}}>Request your whiskey</button>
            </form>
        </>
    )
}

export default AddNewWhiskeyPage;