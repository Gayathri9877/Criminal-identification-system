import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search.value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '30%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', width: '100%' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', width: '100%' }}>
          <span style={{ padding: '8px', background: '#ccc' }}>
            <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
          </span>
          <input
            type="text"
            placeholder="Search"
            name="search"
            style={{
              width: '100%',
              border: 'none',
              padding: '8px',
              fontSize: '16px',
              outline: 'none',
              color: 'white',
              background: '#ccc',
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <button type="submit" style={{ fontSize: '16px', color: 'white', background: '#000066', border: 'none', borderRadius: '10px', padding: '8px 16px', width: '100%' }}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
