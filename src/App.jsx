import "./App.css";
import HomePage from "./pages/HomePage"
import AddNewWhiskeyPage from "./pages/AddNewWhiskeyPage"
import WhiskeyDetailsPage from "./pages/WhiskeyDetailsPage"
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import UpdateWhiskeyNotes from "./pages/UpdateWhiskeyNotes";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <h1>Whiskeys & Whiskys</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/whiskeys/new' element={<AddNewWhiskeyPage />} />
        <Route path='/whiskeys/:whiskeyId' element={<WhiskeyDetailsPage />} /> 
        <Route path='/whiskeys/cart' element={<CartPage />} /> 
        <Route path='/userNotes/:noteId' element={<UpdateWhiskeyNotes />} /> 
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
