import React from 'react'
import '../Saleschart/saleschart.css'
import Barchart from '../Barchart/Barchart' 

function SalesChart() {
  return (
    <div id="salesinfo">
        <div id='sales'>
            <div id="sales_data">
                <div id="sales_figure">Sales Figures</div>
                <div id="sales_amt">$18,430</div>
            </div>
            <div id='barchart'><Barchart/></div>
        </div>
    </div>
    
  )
}

export default SalesChart