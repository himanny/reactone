import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
    <div class="header">
        <h1>Sample Designs</h1>
        <p>Resize the browser window to see the effect.</p>
      </div>
      
      <div class="topnav">
        <a href="#">Login</a>
      </div>
      
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div class="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            <div class="fakeimg">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div class="card">
            <h3>Popular Post</h3>
            <div class="fakeimg"><p>Image</p></div>
            <div class="fakeimg"><p>Image</p></div>
            <div class="fakeimg"><p>Image</p></div>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <h2>Footer</h2>
      </div>
  </React.StrictMode>
  );
}

export default App;
