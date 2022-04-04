import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Ticketpage from './pages/Ticketpage';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<Ticketpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
