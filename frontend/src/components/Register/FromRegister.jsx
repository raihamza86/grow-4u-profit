import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../store/authSlice";

const FromRegister = () => {
  const navigate = useNavigate();

  // Redux mutation for user registration
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referredBy: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please agree to the terms before submitting.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await registerUser(formData).unwrap();
      if (response) {
        toast.success("Sign-Up successful! 🎉");
        navigate("/login");
        setFormData({
          name: "",
          email: "",
          password: "",
          referredBy: "",
          agree: false,
        });
      }

    } catch (error) {
      console.error("Registration failed:", error);
      if (error?.status === 400) {
        toast.error("User already exists. Please login.");
      } else {
        toast.error(error?.data?.message || "Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="bg-white rounded-t-2xl md:rounded-t-[60px] px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto shadow-lg md:mt-[-6rem] mt-[-2rem] relative z-10">

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mt-4">
        <Link
          to="/login"
          className="text-gray-400 text-lg font-bold border px-8 py-3 border-[#FFC402] cursor-pointer rounded-full hover:bg-orange-500 hover:text-white"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-bold px-8 py-3 rounded-full border border-[#FFC402] cursor-pointer"
        >
          Register
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-y-4 items-center mt-8">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="px-6 pt-6 pb-8 space-y-4 text-sm text-gray-800 w-full"
        >
          <div>
            <label className="block mb-1 text-xl font-medium">Enter Username</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Fill in Username"
              className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Fill in the Email"
              className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Fill in the Password"
              className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">
              Invitation code - Optional
            </label>
            <input
              type="text"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              placeholder="Fill in the invitation code"
              className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-orange-500 hover:bg-orange-400 border border-[#FFC402] text-white font-bold text-xl py-4 rounded-xl mt-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isLoading ? "Registering..." : "Quick Registration"}
          </button>


          <div className="flex items-start mt-4 text-xs text-gray-500">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 mt-1 accent-orange-500"
            />
            <p>
              Read and agree to the{" "}
              <span className="text-black underline">
                User Agreement and Privacy Policy
              </span>
            </p>
          </div>
        </form>

        {/* Right-Side Image */}
        <div className="hidden md:block">
          <img
            src="/register/register.jpg" // Replace with your actual image path
            alt="Registration Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FromRegister;
