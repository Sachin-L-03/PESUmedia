import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'; // Import toast
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser, loginUser } from '../redux/Slice';
import BackgroundImage from '../assets/Background.png';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!'); // Toast error
      return;
    }

    const newUser = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    dispatch(registerUser(newUser));
    toast.success('Registration successful!'); // Toast success
    setIsRegister(false); // Switch to login after registration
  };

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      dispatch(loginUser({ email: formData.email, password: formData.password }));
      toast.success('Login successful!'); // Toast success
      navigate("/"); // Redirect to home page
    } catch (err) {
      toast.error(err.message); // Toast error
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-90 p-8 rounded-lg w-full sm:w-96">
        <h2 className="text-white text-3xl font-semibold mb-6">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        {isRegister ? (
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 rounded-md bg-[#070607] text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 rounded-md bg-[#070607] text-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 rounded-md bg-[#070607] text-white"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-3 mb-6 rounded-md bg-[#070607] text-white"
            />
            <button type="submit" className="w-full bg-[#1DB954] text-white p-3 rounded-md hover:bg-[#1ed760] mb-4">
              Register
            </button>
            <button
              type="button"
              onClick={() => setIsRegister(false)}
              className="w-full bg-[#444444] text-white p-3 rounded-md hover:bg-[#333333]"
            >
              Back to Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 rounded-md bg-[#070607] text-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 mb-6 rounded-md bg-[#070607] text-white"
            />
            <button type="submit" className="w-full bg-[#f16c6c] text-white p-3 rounded-md hover:bg-[#b96cf8] mb-4">
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsRegister(true)}
              className="w-full bg-[#444444] text-white p-3 rounded-md hover:bg-[#333333]"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
