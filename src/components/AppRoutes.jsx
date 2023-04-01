import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from '../components/Pages/Analytics';
import Overview from '../components/Pages/Overview/Overview';
import Statistics from '../components/Pages/Statistics/Statistics';
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