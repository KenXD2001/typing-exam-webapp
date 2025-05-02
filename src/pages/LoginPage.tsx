import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic
    navigate('/landing');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
          Candidate Login
        </h2>
        <div className="space-y-5">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Candidate ID"
          />
          <div className="relative mb-4">
  <input
    type={passwordVisible ? 'text' : 'password'}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Password"
  />
  <button
    type="button"
    onClick={() => setPasswordVisible(!passwordVisible)}
    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
  >
    <Icon
      icon={passwordVisible ? 'mdi:eye-off' : 'mdi:eye'}
      className="w-5 h-5"
    />
  </button>
</div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-lg font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
