import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Scatter } from '@ant-design/plots';
import '../Bubblechart/bubblechart.css'

const BubbleChart = () => {
//   const [data, setData] = useState([]);

  const data = [
    {
      "x": 'Feb',
      "y": 250,
      "size": 44,
      "genre": "blue"
    },
    {
      "x": 'Mar',
      "y": 500,
      "size": 16,
      "genre": "blue"
    },
    {
      "x": 'Mar',
      "y": 650,
      "size": 34,
      "genre": "yellow"
    },
    {
      "x": 'Apr',
      "y": 510,
      "size": 146,
      "genre": "red"
    },
    {
      "x": 'May',
      "y": 400,
      "size": 94,
      "genre": "green"
    },
    {
      "x": 'Jun',
      "y": 600,
      "size": 247,
      "genre": "blue"
    },
    {
      "x": 'Jun',
      "y": 0,
      "size": 32,
      "genre": "blue"
    },
    {
      "x": 'Jul',
      "y": 400,
      "size": 25,
      "genre": "red"
    },
    {
      "x": 'Aug',
      "y": 450,
      "size": 25,
      "genre": "blue"
    },
    {
      "x": 'Sep',
      "y": 610,
      "size": 16,
      "genre": "blue"
    },
    {
      "x": 'Oct',
      "y": 400,
      "size": 129,
      "genre": "yellow"
    },
    {
      "x": 'Oct',
      "y": 605,
      "size": 68,
      "genre": "blue"
    },
    {
      "x": 'Nov',
      "y": 450,
      "size": 77,
      "genre": "red"
    },
    {
      "x": 'Dec',
      "y": 250,
      "size": 44,
      "genre": "blue"
    },

]

//   useEffect(() => {
//     // asyncFetch();

//     setData()
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/antfincdn/t81X1wXdoj/scatter-data.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
  const config = {
    
    appendPadding: 30,
    data,
    xField: 'x',
    yField: 'y',
    colorField: 'genre',
    color: ['r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#5B8FF9', 'r(0.4, 0.8, 1) 0:rgba(255,255,255,0.5) 1:#FFFF00','r(0.4, 0.3, 1) 0:rgba(255,255,255,0.9) 1:#FF0000','r(0.4, 0.8, 1) 0:rgba(255,255,255,0.9) 1:#00ff00'
    ],
    sizeField: 'size',
    size: [5, 40],
    shape: 'circle',
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#eee',
        },
      },
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      line: {
        style: {
          stroke: '#eee',
        },
      },
    },
  };

  return ReactDOM.createPortal(
     <div id="chart">
            <div id='chart_container'>
            <Scatter {...config} />
            </div>   
        </div>,
        document.getElementById("modals")
  )
};

export default BubbleChart