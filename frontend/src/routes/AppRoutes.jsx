import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from '../pages/Dashboard/test';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/notes" element={<h1>Notes</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;