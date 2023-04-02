import React from 'react';
import ReactDOM from 'react-dom';
import '../Modal/modal.css'
import BubbleChart from '../Bubblechart/BubbleChart';



function Modal({setModal}) {
  return ReactDOM.createPortal(
    <div id="modal">
        <BubbleChart/>
    </div>,        
    document.getElementById("modals")
  )
}

export default Modal