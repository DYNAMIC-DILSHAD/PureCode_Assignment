
import './App.css';
import AllCards from './component/AllCards';

import NavBar from './component/NavBar';
import Pages from './component/Pages';
import Profile from './component/Profile';
import Page from './component/Page';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <NavBar />
      <Routes>
      <Route path="/" element={<Pages />} />   
      </Routes>
      
      <Profile/>
      <Page />
      <AllCards />
     
    </div>
    </BrowserRouter>
  );
}

export default App;