import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function WhiskeyDetailsPage() {
    const [whiskey, setWhiskey] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { beerId } = useParams();
    const fetchAWhiskey = async () => {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${whiskeyId}`)
        console.log(response)
        if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            setWhiskey(parsed)
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchAWhiskey()
    }, [])


    return (
        <>
            <img src={whiskey.image_url} style={{ height: "200px" }} />
            <h1>Name: {whiskey.name}</h1>
            <p>Origin: {whiskey.origin}</p>
            <p>Age: {whiskey.age}</p>
            <p>Price: {whiskey.price}</p>
            <p>Description: {whiskey.description}</p>
            <p>Notes: {whiskey.notes}</p>
        </>
    )
}

export default WhiskeyDetailsPage;