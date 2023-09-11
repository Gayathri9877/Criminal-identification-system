import React from 'react'
import Navigation2 from '../Components/Navigationbar2/Navigation2'
import SearchBar from '../Components/Searchbar/Searchbar'
import Footer from '../Components/Footer/footer'
import './itofficer.css'

export default function itofficer() {
    return (
      <div className="main-container">
        <Navigation2/>
      
        <div className="content">
            <SearchBar/>
    
        <div className='foot1'>
            <Footer/>
  
        </div>
        </div>
        </div>
        
      
    )
  }

  
  