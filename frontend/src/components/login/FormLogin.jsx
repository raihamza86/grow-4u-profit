import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/authSlice";
import { toast } from "react-toastify";

const FormLogin = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData).unwrap();
      if (response) {
        toast.success("Login successful! 🎉");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      const errorMsg = error?.data?.message || "Something went wrong. Please try again later.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="bg-white rounded-t-2xl md:rounded-t-[60px] px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto shadow-lg md:mt-[-6rem] mt-[-2rem] relative z-10">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mt-4">
        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-bold px-8 py-3 rounded-full border border-[#FFC402] cursor-pointer"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-400 text-lg font-bold border px-8 py-3 border-[#FFC402] cursor-pointer rounded-full hover:bg-orange-500 hover:text-white"
        >
          Register
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-y-4 items-center mt-8">
        {/* Left-Side Image */}
        <div className="hidden md:block">
          <img
            src="/register/login.jpg"
            alt="Login Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right-Side Form */}
        <form
          onSubmit={handleSubmit}
          className="px-6 pt-6 pb-8 space-y-8 text-sm text-gray-800 w-full"
        >
          <div>
            <label className="block mb-1 text-xl font-medium">Enter Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">Secure Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border-b border-gray-300 text-gray-800 py-2 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-400 cursor-pointer border border-[#FFC402] text-white font-bold text-xl py-4 rounded-xl mt-2 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default FormLogin;
