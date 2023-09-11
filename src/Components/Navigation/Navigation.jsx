import React from 'react';
import './Navigation.css'; 


const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="assets\images\finger-print.png" alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="navbar-title"><h2>CIS</h2></span>
      </div>
      <div className="navbar-center mt-2" >
        <ul className="navbar-links ">
          <li><a href="#">New registration</a></li>
          <li><a href="#">Crimes</a></li>
          <li><a href="#">Criminals</a></li>
          <li><a href="#">Victims</a></li>
          <li><a href="#">Evidences</a></li>
        </ul>
      </div>
      <div className="navbar-right" style={{ marginRight: '20px' }}>
  <button className="user-button" >
    <span className="username">Gayathri rasangika</span>
    <div className="profile-picture-frame">
      <img src="assets/images/man.png" alt="Profile" className="profile-picture" />
    </div>
  </button>
</div>
     
      
    </nav>
  );
};

export default NavigationBar;
