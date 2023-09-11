import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import RegisterCrime from '../Components/RegisterCrime/RegisterCrime'; 
import Footer from '../Components/Footer/footer';


export default function Registercrimefull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <RegisterCrime/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

  