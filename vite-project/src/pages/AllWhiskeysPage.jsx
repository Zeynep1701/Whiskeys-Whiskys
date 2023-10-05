import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function AllWhiskeysPage() {
    const [whiskeys, setWhiskeys] = useState([])
    const fetchAllWhiskeys = async () => {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        if (response.ok) {
            const allWhiskeys = await response.json()
            setBeers(allWhiskeys)
            console.log(allWhiskeys)
        }
    }
    useEffect(() => {
        fetchAllWhiskeys()
    }, [])

    return (
        <>
            {whiskeys.map(whiskey => (
                <li key={whiskey._id}>
                    <Link to={`/whiskeys/${whiskey._id}`} >
                        <img src={whiskey.image_url} style={{ height: "200px" }} />
                        <h1>{whiskey.name}</h1>
                        <p>{whiskey.origin}</p>
                        <p>{whiskey.age}</p>
                        <p>{whiskey.price}</p>
                      
                    </Link>
                </li>
            ))}
        </>
    )
}

export default AllWhiskeysPage;