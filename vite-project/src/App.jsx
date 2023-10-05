import "./App.css";
import HomePage from "./pages/HomePage"
import AllWhiskeysPage from "./pages/AllWhiskeysPage"
import WhiskeyDetailsPage from "./pages/WhiskeyDetailsPage"
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Nadia's heaven</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/whiskeys' element={<AllWhiskeysPage />} />
        <Route path='/whiskeys/:whiskeyId' element={<WhiskeyDetailsPage />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
