import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notification from './components/Notification';  // ✅ REQUIRED
import FindDoctorSearch from './components/FindDoctorSearch';
import Sign_Up from './commands/Sign_Up';
import Login from './components/Login';
import AppointmentFormIC from './components/AppointmentFormIC';
import GiveReviews from './components/GiveReviews';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* ✅ NAVBAR */}
        <Navbar />
        
        {/* ✅ NOTIFICATION COMPONENT - APPLICATION-WIDE */}
        <Notification />
        
        {/* ✅ MAIN CONTENT WITH ROUTES */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<FindDoctorSearch />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<AppointmentFormIC />} />
            <Route path="/profile" element={<GiveReviews />} />
            <Route path="/profile-card" element={<ProfileCard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
