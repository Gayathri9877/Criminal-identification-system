import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import RegisterEvidence from '../Components/RegisterEvidence/RegisterEvidence';
import Footer from '../Components/Footer/footer';


export default function RegisterEvidencefull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <RegisterEvidence/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
