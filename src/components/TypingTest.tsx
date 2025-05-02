import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import paragraphs from "../data/paragraphs.json";

const sampleText = paragraphs.paragraphs[0];

const TypingTest = () => {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  const words = sampleText.trim().split(" ");

  useEffect(() => {
    if (started && timeLeft > 0) {
      if (!startTimeRef.current) startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalRef.current!);
      handleSubmit();
    }
    return () => clearInterval(intervalRef.current!);
  }, [started, timeLeft]);

  useEffect(() => {
    calculateLiveMetrics();
    scrollToCurrentWord();
  }, [input]);

  const calculateLiveMetrics = () => {
    const typedWords = input.trim().split(/\s+/);
    const correctWords = typedWords.filter(
      (word, idx) => word === words[idx]
    ).length;

    const elapsed =
      (Date.now() - (startTimeRef.current || Date.now())) / 1000 / 60;
    const currentWPM =
      typedWords.length && elapsed
        ? Math.round(typedWords.length / elapsed)
        : 0;
    const currentAccuracy = typedWords.length
      ? Math.round((correctWords / typedWords.length) * 100)
      : 100;

    setWpm(currentWPM);
    setAccuracy(currentAccuracy);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!started) setStarted(true);
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const typedWords = input.trim().split(/\s+/);
    const correct = typedWords.filter((word, i) => word === words[i]).length;

    const results = {
      totalLetters: input.length,
      totalWords: typedWords.length,
      correctWords: correct,
      wrongWords: typedWords.length - correct,
      wpm,
      accuracy,
    };

    navigate("/results", { state: results });
  };

  const scrollToCurrentWord = () => {
    const container = paragraphRef.current;
    if (!container) return;

    const wordsTyped = input.trim().split(/\s+/).length;
    const span = container.querySelector(`#word-${wordsTyped - 1}`);
    if (span) {
      span.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const renderHighlightedText = () => {
    const typedWords = input.trim().split(/\s+/);

    return words.map((word, idx) => {
      const typed = typedWords[idx];
      let className = "text-gray-500";

      if (typed !== undefined) {
        className = word === typed ? "text-green-600" : "text-yellow-500";
      }

      return (
        <span key={idx} id={`word-${idx}`} className={`${className} mr-1`}>
          {word}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen w-full grid place-items-center bg-gray-100 px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl transition-all duration-300">
        <div className="flex justify-center items-center mb-10 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">
            Typing Speed Test
          </h2>
        </div>

        <div className="flex justify-between items-center w-full mb-4">
          <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
            <Icon icon="svg-spinners:clock" className="w-4 h-4" />
            <span>Time Left:</span>
            <span>
              {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <span>WPM: {wpm}</span>
            <span>/</span>
            <span>ACC: {accuracy}%</span>
          </div>
        </div>

        {/* Time Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${(timeLeft / 600) * 100}%` }}
          ></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-md p-4 mb-6 text-gray-700 shadow-sm">
          {/* Paragraph Display (Max 4 lines) */}
          <div
  ref={paragraphRef}
  className="line-clamp-4 overflow-y-auto text-base leading-relaxed mb-4 pr-1 break-words"
>
  {renderHighlightedText()}
</div>


          {/* Input Field (Single Line) */}
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Start typing here..."
            value={input}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
