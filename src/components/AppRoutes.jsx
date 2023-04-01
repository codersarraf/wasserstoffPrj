import React from 'react'

import { Routes, Route } from "react-router-dom";
import Overview from '../components/Pages/Overview/Overview';
import Dashboard from '../components/Pages/Dashboard';

function AppRoutes() {
  return (
  
         <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    
  )
}

export default AppRoutes