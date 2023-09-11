import React from 'react';
import Navigation2 from '../Components/Navigationbar2/Navigation2';
import RegistrationPage from '../Components/RegistrationPage/RegistrationPage'; 
import Footer from '../Components/Footer/footer';


export default function FullUserdetails() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation2/>
      <div style={{ flex: 1 }}>
        <RegistrationPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

  