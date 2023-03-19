import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Generate OTP for entered email and redirect to OTP page
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP
    navigate(`/OTP`);
  };

  const handleForgotPasswordClick = () => {
    // Redirect to forgot password page
    navigate('/forgot-password');
  };

  return (
    <div>
      
    <div className="signin-container">
      <h1>Welcome to Systempackage</h1>
      
        
        <input className="signin-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      
      <br />
      
        <input className="signin-input" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      
      <br />
      <button onClick={handleNextClick} className="signbutton">
        <p className='text'>Next</p>
        </button>
      <br />
      <button onClick={handleForgotPasswordClick} className="forgotpassword">Forgot Your Password?</button>

      
      <p className='createaccount'>Not Member?<a href='/' className='account'>Create account</a></p>

      <div className='banner'>
       
          <div className='banner1'>
            <div className='banner2'>

            </div>

          </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default SignIn;
