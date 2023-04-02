import React from 'react'

import { Routes, Route } from "react-router-dom";

import Dashboard from './Pages/Dashboard/Dashboard';
import Overview from './Pages/Overview/Overview';


function AppRoutes() {
  return (
  
         <Routes>
            <Route path="/*" element={<Overview />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    
  )
}

export default AppRoutes