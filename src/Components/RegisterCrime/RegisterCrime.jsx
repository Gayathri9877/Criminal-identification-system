import React, { useState, useRef  } from 'react';
import './RegisterCrime.css'; // Include your custom CSS for styling

const RegisterCrimePage = () => {
  const [crimeID, setCrimeID] = useState('');
  const [crimeType, setCrimeType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [landMark, setLandMark] = useState('');
  const [testinomials, setTestinomials] = useState('');
  const [photos, setPhotos] = useState([]); // Manage the previewed photos
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const fileInputRef = useRef(null);

  const handlePhotoChange = (event) => {
    const selectedPhotos = event.target.files;
    setPhotos([...photos, ...selectedPhotos]);
  };

  const handleRemovePhoto = () => {
    if (selectedPhotoIndex !== null) {
      const updatedPhotos = [...photos];
      updatedPhotos.splice(selectedPhotoIndex, 1);
      setPhotos(updatedPhotos);
      setSelectedPhotoIndex(null);
    }
  };

  const handleRemoveAllPhotos = () => {
    setPhotos([]);
    setSelectedPhotoIndex(null);
  };
  const handleAddMorePhotosClick = () => {
    // Use the click() method of the file input element to open the file dialog
    
    fileInputRef.current.click();
  };

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleRegistration = () => {
    // Handle the form submission here
    console.log('Registration submitted:', {
      crimeID,
      crimeType,
      date,
      time,
      province,
      district,
      city,
      area,
      address,
      landMark,
      testinomials,
      photos: photos.map((photo) => photo.name),
      // ... other field values
    });

    
  };

  return (
    <div className="registration-container">
      <h3>Register Crime</h3>
      <div className="registration-form">
        <div className="input-container">
          <label htmlFor="crimeID" className='p1'>Crime ID</label>
          <input
            type="text"
            id="crimeID"
            value={crimeID}
            onChange={(e) => setCrimeID(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="crimeType" className='p1'>Crime Type</label>
          <input
            type="text"
            id="crimeType"
            value={crimeType}
            onChange={(e) => setCrimeType(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="date" className='p1'>Date</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="time" className='p1'>Time</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
          <label htmlFor="district" className='p1'>District</label>
          <input
            type="text"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
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
          <label htmlFor="address" className='p1'>Address (optional)</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="landMark" className='p1'>Land Mark(optional)</label>
          <input
            type="text-area"
            id="landMark"
            value={landMark}
            onChange={(e) => setLandMark(e.target.value)}
            className="large-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="testinomials" className='p1'>Testinomials(about the crime | optional)</label>
          <input
            type="text-area"
            id="testinomials"
            value={testinomials}
            onChange={(e) => setTestinomials(e.target.value)}
            className="large-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="photo" className="p1">
            Photos of the crime
          </label>
          <input
          type="file"
          id="photo"
          accept="image/*"
          multiple
          onChange={handlePhotoChange}
          className="photo-input"
          ref={fileInputRef} // Attach the ref to the file input element
          style={{ display: 'none' }} // Hide the file input element
        />
        
        </div>
        <div className="photo-preview">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-cell ${selectedPhotoIndex === index ? 'selected' : ''}`}
            onClick={() => handlePhotoClick(index)}
          >
            <img src={URL.createObjectURL(photo)} alt={`Uploaded Crime Photo ${index}`} />
          </div>
        ))}
      </div>
        <div className="action-buttons">
          <button className="remove-button" onClick={handleRemovePhoto}>
            <div className="icon-circle">
              <span>-</span>
            </div>
            Remove Photo
          </button>
          <button className="add-button" onClick={handleAddMorePhotosClick}>
            <div className="icon-circle">
              <span>+</span>
            </div>
            Add more Photos
          </button>
        </div>
        
        <button onClick={handleRegistration} className="btn" >
          Register Crime
        </button>
      </div>
    </div>
  );
};

export default RegisterCrimePage;
