import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Pejact</code> 
        </p>
        <a
          className="App-link"
          href="http://pat-foundation-wiki.ct8.pl/index.php?title=Pejact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiki
        </a>
        <br /><br />
        <iframe width="700" height="400" src="https://www.youtube.com/embed/i5jl_KXg4iE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br /><br />
      <div id="footer"><h3>Pat foundation Team</h3></div>
      </header>
    </div>
  
  );
}

export default App;
