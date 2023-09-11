import React, { useState, useRef  } from 'react';
import './RegisterEvidence.css'; // Include your custom CSS for styling

const RegisterEvidence = () => {
  const [crimeID, setCrimeID] = useState('');
  const [evidenceID, setEvidenceID] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [crimePhoto, setCrimePhoto] = useState(null);
  const [victimPhotos, setVictimPhotos] = useState([]); // Manage the previewed victim photos
  const [selectedVictimPhotoIndex, setSelectedVictimPhotoIndex] = useState(null);

  const fileInputRef = useRef(null);

  const handleCrimePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setCrimePhoto(selectedPhoto);
  };

  const handleVictimPhotoChange = (event) => {
    const selectedPhotos = event.target.files;
    setVictimPhotos([...victimPhotos, ...selectedPhotos]);
  };

  const handleRemoveVictimPhoto = () => {
    if (selectedVictimPhotoIndex !== null) {
      const updatedPhotos = [...victimPhotos];
      updatedPhotos.splice(selectedVictimPhotoIndex, 1);
      setVictimPhotos(updatedPhotos);
      setSelectedVictimPhotoIndex(null);
    }
  };

  const handleRemoveAllVictimPhotos = () => {
    setVictimPhotos([]);
    setSelectedVictimPhotoIndex(null);
  };

  const handleAddMoreVictimPhotosClick = () => {
    // Use the click() method of the file input element to open the file dialog
    fileInputRef.current.click();
  };

  const handleVictimPhotoClick = (index) => {
    setSelectedVictimPhotoIndex(index);
  };

  const handleRegistration = () => {
    // Handle the form submission here
    console.log('Registration submitted:', {
      crimeID,
      evidenceID,
      testimonial,
      crimePhoto: crimePhoto ? crimePhoto.name : null,
      victimPhotos: victimPhotos.map((photo) => photo.name),
      // ... other field values
    });
  };

  return (
    <div className="registration-container">
      <h3>Register Evidence</h3>
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
          <label htmlFor="evidenceID" className='p1'>Evidence ID</label>
          <input
            type="text"
            id="evidenceID"
            value={evidenceID}
            onChange={(e) => setEvidenceID(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="photo" className="p1">
          Photo of the Crime
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleCrimePhotoChange}
            className="photo-input"
          />
        </div>
        {crimePhoto && (
          <div className="photo-preview-crime">
            <h6 ><center>--- Uploaded Crime Photo ---</center></h6>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <img src={URL.createObjectURL(crimePhoto)} alt="Uploaded Crime" style={{ maxWidth: '200px', maxHeight: '200px' }}/>
          </div>
          </div>
        )}

        
         
        <div className="input-container">
          <label htmlFor="testimonial" className='p1'>Testimonial(about the Evidence| optional)</label>
          <input
            type="text-area"
            id="testimonial"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            className="large-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="victimPhotos" className="p1">
            Photos of Victim
          </label>
          <input
            type="file"
            id="victimPhotos"
            accept="image/*"
            multiple
            onChange={handleVictimPhotoChange}
            className="photo-input"
            ref={fileInputRef} // Attach the ref to the file input element
            style={{ display: 'none' }} // Hide the file input element
          />
          
        
        </div>
        <div className="photo-preview">
        {victimPhotos.map((photo, index) => (
          <div
          key={index}
          className={`photo-cell ${selectedVictimPhotoIndex === index ? 'selected' : ''}`}
          onClick={() => handleVictimPhotoClick(index)}
        >
          <img src={URL.createObjectURL(photo)} alt={`Uploaded Victim Photo ${index}`} />
        </div>
        ))}
      
      <div className="action-buttons">
          <button className="remove-button" onClick={handleRemoveVictimPhoto}>
            <div className="icon-circle">
              <span>-</span>
            </div>
            Remove Victim Photo
          </button>
          <button className="add-button" onClick={handleAddMoreVictimPhotosClick}>
            <div className="icon-circle">
              <span>+</span>
            </div>
            Add more Victim Photos
          </button>
        </div>

        
        <button onClick={handleRegistration} className="btn" >
          Register 
        </button>
      </div>
    </div>
    </div>
  );
};

export default RegisterEvidence;
