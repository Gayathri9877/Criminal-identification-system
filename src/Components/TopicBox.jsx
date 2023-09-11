import React from 'react'
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import './topicbox.css'
import { Alert } from 'bootstrap';

export default function TopicBox() {
  return (

    <div className="container">
      <div className="row pt-5">
  <div className="col-md-6 ">
    <div className="card " style={{height:"auto",backgroundColor:"rgb(224 225 252)",marginBottom:"30px"}}>
      <div className="card-body" style={{height:"auto"}}>
        <img src="assets/images/user.png" alt="" className='iconbox mt 3' />
        <h4 className='text-center mt-2'>User</h4>
        <BsFillArrowRightSquareFill className="rightarrow " />

      </div>
    </div>
  </div>
  <div className="col-md-6 ">
    <div className="card " style={{height:"auto", backgroundColor:"rgb(224 225 252)",marginBottom:"30px"}}>
      <div className="card-body">
      <img src="assets/images/robber.png" alt="" className='iconbox mt 3)' />
        <h4 className='text-center mt-2'>Criminal</h4>
        <BsFillArrowRightSquareFill className="rightarrow " />
        
      </div>
    </div>
  </div>
</div>

    </div>

  )
}
