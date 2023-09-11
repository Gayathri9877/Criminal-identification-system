import React from 'react'
import TopicBox from '../Components/TopicBox'
import Navigation2 from '../Components/Navigationbar2/Navigation2'
import Footer from '../Components/Footer/footer'
import './Home.css'

export default function Home() {
  return (
    <div >
      <Navigation2/>
    <div>
      <TopicBox/>
    <div className='hm'>
      <Footer/>

    </div>
    </div>
    </div>
  )
}
