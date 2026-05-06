import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [profile, setProfile] = useState({
    name: 'Panchami Panchami',
    email: 'panchami@example.com',
    phone: '+91 9876543210',
    role: 'Patient'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(profile);

  useEffect(() => {
    // Load from localStorage or API
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
      setEditData(JSON.parse(savedProfile));
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setProfile(editData);
    localStorage.setItem('userProfile', JSON.stringify(editData));
    setIsEditing(false);
    alert('✅ Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="/avatar.png" alt="Profile" className="profile-avatar" />
        <h2>{profile.role} Profile</h2>
      </div>

      <div className="profile-content">
        {isEditing ? (
          // ✅ EDIT FORM
          <form className="edit-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditChange}
              />
            </div>
            
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditChange}
              />
            </div>
            
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={editData.phone}
                onChange={handleEditChange}
              />
            </div>
            
            <div className="form-group">
              <label>Role:</label>
              <select name="role" value={editData.role} onChange={handleEditChange}>
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={handleSave}>
                💾 Save Changes
              </button>
              <button type="button" className="btn btn-cancel" onClick={handleCancel}>
                ❌ Cancel
              </button>
            </div>
          </form>
        ) : (
          // ✅ VIEW MODE
          <div className="profile-view">
            <div className="profile-field">
              <strong>Name:</strong> {profile.name}
            </div>
            <div className="profile-field">
              <strong>Email:</strong> {profile.email}
            </div>
            <div className="profile-field">
              <strong>Phone:</strong> {profile.phone}
            </div>
            <div className="profile-field">
              <strong>Role:</strong> {profile.role}
            </div>
            <button className="btn" onClick={handleEditToggle}>
              ✏️ Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
