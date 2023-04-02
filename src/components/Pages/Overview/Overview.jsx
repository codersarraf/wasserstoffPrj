import React, { useState } from 'react'
import Modal from '../../Modal/Modal';
import Sidebar from '../../Sidebar/Sidebar'


import '../Overview/overview.css'
import SalesChart from '../../Saleschart/SalesChart';
import HexbinMap from '../../Hexmap/HexbinMap';


function Overview() {
  const [modal, setModal] = useState(false);
  const handleclick=()=>{
    setModal(!modal);
  }
  return (
    <div id='Overview' >
      <Sidebar/>
      <div onClick={handleclick} id='mapchart_cont'>
        <HexbinMap  />
      <div id="modal_cont">
        {/* <button id='overviewBtn' onClick={handleclick}>Click For Bubble Chart</button> */}
        {modal ? <Modal setModal={setModal}/> : ""}
      </div>
      <SalesChart/>
      </div>
    </div>
    
  )
  
}

export default Overview