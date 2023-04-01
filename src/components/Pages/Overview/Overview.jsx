import React, { useState } from 'react'
import Modal from '../../Modal/Modal';
import Sidebar from '../../Sidebar/Sidebar'
import Hexmap from '../../Hexmap/Hexmap';

import '../Overview/overview.css'
import SalesChart from '../../Saleschart/SalesChart';







function Overview() {
  const [modal, setModal] = useState(false);
  const handleclick=()=>{
    setModal(!modal);
  }
  return (
    <div id='Overview' >
      <Sidebar/>
      <div id='mapchart_cont'>
        <Hexmap/>
      <div id="modal_cont">
        <button id='overviewBtn' onClick={handleclick}>Click Me For Bubble Chart</button>
        {modal ? <Modal/> : ""}
      </div>
      <SalesChart/>
      </div>
    </div>
    
  )
  
}

export default Overview