import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://librarybackend-m1ox.onrender.com';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </Router>
  );
}

export default App;
