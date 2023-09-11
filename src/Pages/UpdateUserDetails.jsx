import React from 'react';
import Navigation2 from '../Components/Navigationbar2/Navigation2';
import UpdateUser from '../Components/UpdateUser/UpdateUser'; 
import Footer from '../Components/Footer/footer';

export default function UpdateUserdetails() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation2/>
      <div style={{ flex: 1 }}>
        <UpdateUser/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
