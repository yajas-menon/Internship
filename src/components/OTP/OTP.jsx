import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './otp.css';

function OTP() {
  const { email, otp } = useParams();
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const history = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleResendClick = () => {
    // Implement resend OTP logic here
    setTimer(60);
  };

  return (
    <div className="otp-container">
      <h1 >Enter the verification</h1>
      <h1>to continue</h1>
      <p className="otp-paragraph">We have sent to {email}. If you don't see it,check your spam</p>
      <div className="otp-inputs">
        {otpValues.map((value, index) => (
          <input className='otp-inputs'
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={e => handleOtpChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="otp-actions">
        <button className="otp-back-button" onClick={handleBackButtonClick}>Back</button>
        <div className="otp-timer">
          {timer === 0 ? (
            <button onClick={handleResendClick}>Resend OTP</button>
          ) : (
            <span className="otp-resend-button">Resend OTP in {timer} seconds</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default OTP;
