import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function HomePage() {
    return (
        <>
            <div>
                <Link to={"/whiskeys"}>
                    <img src={"src/assets/whiskeys.png"} alt="whiskeys photo" />
                    <p>All Whiskeys</p>
                    <p>Welcome to a splendid journey where exquisite flavors meet timeless traditions. At Nadia's heaven, we take pride in curating a selection of the finest whiskeys from around the world, each with its own unique tale and character. From the rich, peaty aromas of Scottish malts to the smooth and subtle notes of Irish blends, our collection promises to enchant both the seasoned connoisseur and the curious beginner. Navigate through our exclusive whiskey library, uncover hidden gems, and allow your palate to embark on an unparalleled adventure of spirit and heritage. Cheers to discovering your next favorite pour!</p>
                </Link>
            </div>

            <div>
                <Link to={"/new-whiskey"}>
                    <img src={"src/assets/new-whiskey.png"} alt="whiskey new" />
                    <p>Couldn't find the whiskey you wanted?</p>
                    <p>Then go to the nearest store and buy it.</p>
                </Link>
            </div>
        </>)
}

export default HomePage;