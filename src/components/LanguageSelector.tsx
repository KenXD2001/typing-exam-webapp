import { useNavigate } from 'react-router-dom';

const LanguageSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Instructions</h1>
      <p className="text-center mb-6 max-w-lg">
        You will be given a paragraph to type in selected language. Please make sure you are ready. You will have 10 minutes.
      </p>
      <button onClick={() => navigate('/instructions')} className="bg-blue-500 text-white px-6 py-2 rounded">
        Continue
      </button>
    </div>
  );
};

export default LanguageSelector;