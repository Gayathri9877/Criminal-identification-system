import React from 'react';
import Navigation2 from '../Components/Navigationbar2/Navigation2';
import UserPersona from '../Components/UserPersona/UserPersona';
import Footer from '../Components/Footer/footer';


export default function FullUserPersona() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation2/>
      <div style={{ flex: 1 }}>
        <UserPersona/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
