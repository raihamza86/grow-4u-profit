import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate password change logic
    console.log('Password Change Submitted:', formData);

    // Redirect after success
    navigate('/');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[90vh] max-h-[600px] flex justify-center items-center z-10">
        <img
          src="/register/login.png"
          alt="Visa Consultancy & Travel Solutions"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 text-center">
          <div className="text-white flex flex-col items-center max-w-4xl space-y-4 justify-center">
            <h1 className="text-3xl font-bold leading-tight uppercase">
              Change Password
            </h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-t-2xl md:rounded-t-[60px] px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto shadow-lg md:mt-[-6rem] mt-[-2rem] relative z-10">
        <div className="grid md:grid-cols-2 gap-y-4 items-center mt-8">
          {/* Left-Side Image */}
          <div className="hidden md:block">
            <img
              src="/register/changepassword.jpg"
              alt="Change Password Illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right-Side Form */}
          <form
            onSubmit={handleSubmit}
            className="px-6 pt-6 pb-8 space-y-8 text-sm text-gray-800 w-full"
          >
            <div>
              <label className="block mb-1 text-xl font-medium">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter your current password"
                className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-xl font-medium">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
                className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-xl font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your new password"
                className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 cursor-pointer border border-[#FFC402] text-white font-bold text-xl py-4 px-20 rounded-xl mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
