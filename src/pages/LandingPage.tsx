import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-3xl font-semibold">Select Language for Typing Examination</h1>
      <div className="flex gap-4">
        <button onClick={() => navigate('/select-language')} className="px-6 py-2 bg-blue-600 text-white rounded">English</button>
        <button onClick={() => navigate('/select-language')} className="px-6 py-2 bg-green-600 text-white rounded">Hindi</button>
      </div>
    </div>
  );
};

export default LandingPage;