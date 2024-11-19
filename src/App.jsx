import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import About from './components/About';
import Home from './components/Home';
import Vm from './components/Vm';
import logo from './images/logo.png';
import pilipinas from './images/pilipinas-logo.png';
import tagudin from './images/tagudin-logo.png';
import tagudin1 from './images/tagudin-logo1.png';

function App() {
  const [page, setPage] = useState('home');
  const handlePageChange = (pageName) => {
  setPage(pageName);
};

return (
  <div>
  <header className="header d-flex py-3 ">
  <div className="logo">
        <img className="pilipinas-logo" src={pilipinas} alt="Bagong Pilipinas" style={{ height: '70px' }}/>
        <img className="ispsc-logo" src={logo} alt="ISPSC" style={{ height: '70px' }}/>
        <div class="text-logo">
            <div id="republic">Republic of the Philippines</div>
            <div id="ispsc">Ilocos Sur Polytechnic State College</div>
            <div id="location">Tagudin Campus | Tagudin, Ilocos Sur</div>
        </div>
        <img className="tagudin-logo1" src={tagudin1} alt="Tagudin" style={{ height: '70px' }}/>
        <img className="tagudin-logo" src={tagudin} alt="Tagudin" style={{ height: '70px' }}/>
  </div> 
  </header>
  <div className="navbar justify-content-center ">
        <button className={`bt ${page === 'home' ? 'active' : ''}`}onClick={() => handlePageChange('home')}>Home</button>
        <button className={`bt ${page === 'about' ? 'active' : ''}`} onClick={() => handlePageChange('about')}>About</button>
        <button className={`bt ${page === 'vm' ? 'active' : ''}`} onClick={() => handlePageChange('vm')}>Vision & Mission</button>

        
        
        {/* <button className="btn btn-outline-primary mx-2" onClick={() => handlePageChange('home')}>Home</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => handlePageChange('about')}>About</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => handlePageChange('vm')}>Vision & Mission</button> */}
  </div>

  <main className="container my-5">
    {page === 'home' && <Home />}
    {page === 'about' && <About />}
    {page === 'vm' && <Vm />}
  </main>
</div>
  );
}



export default App;