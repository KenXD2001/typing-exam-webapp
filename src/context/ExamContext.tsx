import React, { createContext, useContext, useState } from 'react';
import { TypingStats } from '../utils/typingUtils';

interface ExamContextType {
  paragraph: string;
  setParagraph: (p: string) => void;
  stats: TypingStats | null;
  setStats: (s: TypingStats) => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paragraph, setParagraph] = useState('');
  const [stats, setStats] = useState<TypingStats | null>(null);

  return (
    <ExamContext.Provider value={{ paragraph, setParagraph, stats, setStats }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = (): ExamContextType => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};