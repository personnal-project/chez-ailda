import React from 'react';
import './static/scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='logo'><h1 className='logo-temp'> Chez Ailda</h1></div>
          <div className='nav-items'>
            <li>Accueil</li>
            <li>Notre histoire</li>
            <li>Carte</li>
            <li>Contact</li>
          </div>
        <div className='hamburger'>
          <i class="bi bi-list"></i>
        </div>
      </div>

      <div className='Error'>
        <h2>Un site crée avec amour</h2>
      </div>
     
    </div>
  );
}

export default App;
