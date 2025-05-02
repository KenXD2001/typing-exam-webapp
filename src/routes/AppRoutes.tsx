import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';
import LanguageSelector from '../components/LanguageSelector';
import InstructionPage from '../components/InstructionPage';
import TypingTest from '../components/TypingTest';
import ResultPage from '../components/ResultPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/select-language" element={<LanguageSelector />} />
      <Route path="/instructions" element={<InstructionPage />} />
      <Route path="/exam" element={<TypingTest />} />
      <Route path="/results" element={<ResultPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;