import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import OTP from './components/OTP/OTP';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;
