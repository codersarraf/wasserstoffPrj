import React from 'react'
import BubbleChart from '../../Bubblechart/BubbleChart'
import Sidebar from '../../Sidebar/Sidebar'
import SalesChart from '../../Saleschart/SalesChart'


function Dashboard() {
  return (
    <div id='Overview' >
      <Sidebar/>
      <div id='mapchart_cont'>
        <BubbleChart />
      <div id="modal_cont">
      </div>
      <SalesChart/>
      </div>
    </div>
  )
}

export default Dashboard