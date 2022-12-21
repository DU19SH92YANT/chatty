import React from 'react';
import './ForgotPassword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/images/background.jpg';

const ForgotPassword = () => {
  return (
    <div
      className="container-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value="my password"
                      labelText="Password"
                      placeholder="Enter user Password"
                      handleChange={() => {}}
                    />
                    <Button
                      label={'SIGNIN'}
                      className="auth-button button"
                      disabled={true}
                    />
                    <Link to={'/'}>
                      <span className="forgot-password">
                        <FaArrowLeft className="arrow-left" />
                        Back to Login
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
