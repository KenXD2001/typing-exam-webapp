import { useNavigate } from 'react-router-dom';

const InstructionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Typing Exam Instructions</h2>
      <ul className="list-disc mb-6">
        <li>Total time: 10 minutes</li>
        <li>Type the paragraph as accurately as possible</li>
        <li>Live stats will be displayed</li>
        <li>Exam will auto-submit when time is over</li>
      </ul>
      <button onClick={() => navigate('/exam')} className="bg-green-600 text-white px-6 py-2 rounded">
        Start Examination
      </button>
    </div>
  );
};

export default InstructionPage;