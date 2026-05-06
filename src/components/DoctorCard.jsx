import React from 'react';

const DoctorCard = ({ doctor, onCancel }) => {
  const handleCancel = () => {
    // ✅ Task 19 REQUIRED: Cancel appointment logic
    if (window.confirm(`Cancel appointment with Dr. ${doctor.name}?`)) {
      onCancel(doctor.id);
      alert('✅ Appointment cancelled successfully!');
    }
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image || '/default-doctor.jpg'} alt={doctor.name} className="doctor-image" />
      
      <div className="doctor-info">
        <h3>Dr. {doctor.name}</h3>
        <p className="specialty">{doctor.specialty}</p>
        <p className="experience">{doctor.experience} years experience</p>
        <div className="rating">⭐ {doctor.rating}/5 ({doctor.reviews} reviews)</div>
        
        {doctor.appointment && (
          <div className="appointment-details">
            <p><strong>Date:</strong> {doctor.appointment.date}</p>
            <p><strong>Time:</strong> {doctor.appointment.time}</p>
            <button 
              onClick={handleCancel}
              className="cancel-btn"
            >
              ❌ Cancel Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
