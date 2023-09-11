import React, { useState } from 'react';
import './UpdateUser.css'; // Include your custom CSS for styling

const RegistrationPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [branch, setBranch] = useState('');
  const [joindate, setJoinDate] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleRegistration = () => {
    // Handle the form submission here
    console.log('Registration submitted:', {
      registrationNumber,
      nicNumber,
      firstName,
      lastName,
      telephoneNumber,
      province,
      city,
      area,
      address,
      branch,
      joindate,
      photo: photo ? photo.name : null,
      // ... other field values
    });
  };

  return (
    <div className="registration-container">
      <h3>Update Details</h3>
      <div className="registration-form">
        <div className="input-container">
          <label htmlFor="registrationNumber" className='p1'>Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="nicNumber" className='p1'>NIC Number</label>
          <input
            type="text"
            id="nicNumber"
            value={nicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="firstName" className='p1'>First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className='p1'>Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="telephoneNumber" className='p1'>Telephone Number</label>
          <input
            type="text"
            id="telephoneNumber"
            value={telephoneNumber}
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="province" className='p1'>Province</label>
          <input
            type="text"
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="city" className='p1'>City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="area" className='p1'>Area</label>
          <input
            type="text"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="address" className='p1'>Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="branch" className='p1'>Branch</label>
          <input
            type="text"
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="joindate" className='p1'>Join Date</label>
          <input
            type="text"
            id="joindate"
            value={joindate}
            onChange={(e) => setJoinDate(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="photo" className="p1">
            Photo of the Criminal
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="photo-input"
          />
        </div>
        {photo && (
          <div className="photo-preview">
            <h6>--- Uploaded Photo ---</h6>
            <img src={URL.createObjectURL(photo)} alt="Uploaded Criminal" />
          </div>
        )}
        
        <button onClick={handleRegistration} className="btn" >
          Update
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
