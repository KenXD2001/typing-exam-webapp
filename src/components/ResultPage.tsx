import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const results = location.state;

  if (!results) {
    navigate("/");
    return null;
  }

  const {
    totalLetters,
    totalWords,
    correctWords,
    wrongWords,
    wpm,
    accuracy,
  } = results;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Typing Test Results
        </h2>
        <div className="space-y-4 text-gray-700 text-base">
          <div className="flex justify-between">
            <span>Total Words:</span>
            <span>{totalWords}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Letters:</span>
            <span>{totalLetters}</span>
          </div>
          <div className="flex justify-between">
            <span>Correct Words:</span>
            <span className="text-green-600 font-semibold">{correctWords}</span>
          </div>
          <div className="flex justify-between">
            <span>Wrong Words:</span>
            <span className="text-yellow-500 font-semibold">{wrongWords}</span>
          </div>
          <div className="flex justify-between">
            <span>WPM:</span>
            <span className="font-semibold">{wpm}</span>
          </div>
          <div className="flex justify-between">
            <span>Accuracy:</span>
            <span className="font-semibold">{accuracy}%</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
