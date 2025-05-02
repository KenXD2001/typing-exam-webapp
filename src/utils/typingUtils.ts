export interface TypingStats {
    totalLetters: number;
    totalWords: number;
    correctWords: number;
    incorrectWords: number;
    wpm: number;
    accuracy: number;
  }
  
  export const calculateTypingStats = (
    original: string,
    typed: string,
    durationSeconds: number
  ): TypingStats => {
    const originalWords = original.trim().split(/\s+/);
    const typedWords = typed.trim().split(/\s+/);
  
    let correctWords = 0;
    let incorrectWords = 0;
  
    originalWords.forEach((word, i) => {
      if (typedWords[i] === word) correctWords++;
      else incorrectWords++;
    });
  
    const totalLetters = typed.replace(/\s/g, '').length;
    const totalWords = typedWords.length;
    const wpm = (correctWords / (durationSeconds / 60));
    const accuracy = (correctWords / totalWords) * 100;
  
    return {
      totalLetters,
      totalWords,
      correctWords,
      incorrectWords,
      wpm: Math.round(wpm),
      accuracy: Math.round(accuracy),
    };
  };