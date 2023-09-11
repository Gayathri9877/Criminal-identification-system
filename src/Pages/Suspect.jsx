import React from 'react';
import Navigation2 from '../Components/Navigationbar2/Navigation2';
import RadioButtonfull from '../Components/RadioButtonfull/RadioButtonfull';
import Footer from '../Components/Footer/footer';


export default function Suspect() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation2/>
      <div style={{ flex: 1 }}>
        <RadioButtonfull/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

  