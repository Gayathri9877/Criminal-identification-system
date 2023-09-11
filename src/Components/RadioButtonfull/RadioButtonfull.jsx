import React, { useState } from 'react';
import './RadioButtonfull.css';


const RegistrationPage = () => {
  const [crimeID, setCrimeID] = useState('');
  const [marriageStatus, setMarriageStatus] = useState('');
  const [inCustody, setInCustody] = useState('');
  const [crimeJustified, setCrimeJustified] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [branch, setBranch] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleAddForm = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  const toggleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
 
  

 

  const handleRegistration = () => {
    // Handle the form submission here
    console.log('Registration submitted:', {
      crimeID,
      marriageStatus,
      inCustody,
      crimeJustified,
      nicNumber,
      firstName,
      lastName,
      telephoneNumber,
      province,
      city,
      area,
      address,
      branch,
      photo: photo ? photo.name : null,
    
      // ... other field values
    });
  };


  
  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleMarriageStatusChange = (event) => {
    setMarriageStatus(event.target.value);
  };

  const handleInCustodyChange = (event) => {
    setInCustody(event.target.value);
  };

  const handleCrimeJustifiedChange = (event) => {
    setCrimeJustified(event.target.value);
  };

  const handleAddData = () => {
    if (crimeID.trim() !== '' && description.trim() !== '') {
      const newDataItem = {
        id: Math.random().toString(36).substring(7),
        crimeID: crimeID,
        description: description,
      };

      setDataList([...dataList, newDataItem]);
      setCrimeID('');
      setDescription('');
      setIsAddFormVisible(false);
    }
  };

  const handleRemoveSelectedRows = () => {
    const updatedDataList = dataList.filter((item) => !selectedRows.includes(item.id));
    setDataList(updatedDataList);
    setSelectedRows([]);
  };

   // Listen for Enter key press to add data
   const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleAddData();
    }
  };

  return (
    <div className="registration-container">
      <h3>Update Criminal/Suspect Details</h3>
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
        <div className="radio-group">
          <p className='p1'>Marriage Status</p>
          <label className="radio-label">
            <input
              className="lavender-radio"
              type="radio"
              value="Alive"
              checked={marriageStatus === 'Alive'}
              onChange={handleMarriageStatusChange}
            />
            <p className='ale'>Alive</p>
          </label>
          <label className="radio-label">
            <input
              className='lavender-radio'
              type="radio"
              value="Dead"
              checked={marriageStatus === 'Dead'}
              onChange={handleMarriageStatusChange}
            />
            <p className='ale'>Dead</p>
          </label>
        </div>

        <div className="radio-group">
          <p className='p1'>In Custody?</p>
          <label className="radio-label">
            <input
            className='lavender-radio'
              type="radio"
              value="Yes"
              checked={inCustody === 'Yes'}
              onChange={handleInCustodyChange}
            />
            <p className='ale'>Yes</p>
          </label>
          <label className="radio-label">
            <input
            className='lavender-radio'
              type="radio"
              value="No"
              checked={inCustody === 'No'}
              onChange={handleInCustodyChange}
            />
            <p className='ale'>No</p>
          </label>
        </div>

        <div className="radio-group">
          <p className='p1'>Crime Justified?</p>
          <label className="radio-label">
            <input
            className='lavender-radio '
              type="radio"
              value="Yes"
              checked={crimeJustified === 'Yes'}
              onChange={handleCrimeJustifiedChange}
            />
            <p className='ale'>Yes</p>
          </label>
          <label className="radio-label">
            <input
            className='lavender-radio'
              type="radio"
              value="No"
              checked={crimeJustified === 'No'}
              onChange={handleCrimeJustifiedChange}
            />
            <p className='ale'>No</p>
          </label>
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

        
      </div>
    <div className="add-to-crimes-section">Add to crimes
      <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button"  >
             <img src="./assets/images/loupe.png" alt="Search" width='30px' height='30px' />
          </button>
     </div>
    </div>
    <div className="action-buttons">
       <button className="remove-button" onClick={handleRemoveSelectedRows}>
          <div className="icon-circle">
             <span>-</span>
          </div>
          Remove from list
       </button>
       <button className="add-button" onClick={toggleAddForm}>
          <div className="icon-circle">
             <span>+</span>
          </div>
          Add to crime list
        </button>
       <button className="view-button">
           <div className="icon-circle">
              <span>!</span>
           </div>
           View details
       </button>
    </div>

    {isAddFormVisible && (
        <div className="data-table">
          <div className="data-table-controls">
            <label>Crime ID:</label>
            <input
              type="text"
              placeholder="Enter Crime ID"
              value={crimeID}
              onChange={(e) => setCrimeID(e.target.value)}
              onKeyPress={handleEnterKey} // Listen for Enter key press
            />
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyPress={handleEnterKey} // Listen for Enter key press
            />
           
          </div>
        </div>
      )}

     
      <table className='data-table1 '>
        <thead>
          <tr>
            <th></th>
            <th>Crime ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr
            
            key={item.id}
              className={selectedRows.includes(item.id) ? 'selected' : ''}
              onClick={() => toggleRowSelection(item.id)}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => toggleRowSelection(item.id)}
                />
              </td>
              <td>{item.crimeID}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

  

      <div className='fbtn'><button onClick={handleRegistration} className="btn">
          Update
        </button>
    </div>
   </div>
  );
};

export default RegistrationPage;

