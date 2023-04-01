import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const Progresschart = () => {
  const config = {
    height: 70,
    width: 70,
    autoFit: false,
    percent: 0.27,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};

export default Progresschart;