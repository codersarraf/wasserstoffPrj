import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../Modal/modal.css'
import BubbleChart from '../Bubblechart/BubbleChart';



function Modal({setModal}) {
  const [btndata, setbtndata] = useState("X");
  return ReactDOM.createPortal(
    <div id="modal">
        <BubbleChart/>
        <button className='closeBtn' onMouseOver={()=>setbtndata("Close")} onClick={()=>setModal(false)}>{btndata}</button>
    </div>,
    document.getElementById("modals")
  )
}

export default Modal