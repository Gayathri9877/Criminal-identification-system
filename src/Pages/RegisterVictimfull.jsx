import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import RegisterVictimPage from '../Components/RegisterVictim/RegisterVictim';
import Footer from '../Components/Footer/footer';


export default function RegisterVictimfull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <RegisterVictimPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
