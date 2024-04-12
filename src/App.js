import './App.css';
import CharacterDetails from './CharacterDetails';
import Characters from './Characters';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function App() {
  const {loading} = useSelector(state=>state.character);
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route exact path="/characterkart" element={<Characters/>}/>
          <Route exact path="/character/:id" element={<CharacterDetails/>}/>
        </Routes>
        {!loading && <Footer/>}
      </div>
    </Router>

  );
}

export default App;
