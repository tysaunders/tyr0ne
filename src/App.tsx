import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Component00Index from "./imports/00Index-9-531";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component00Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/preview_page.html" element={<Component00Index />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
