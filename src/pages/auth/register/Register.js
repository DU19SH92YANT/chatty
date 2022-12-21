import React from 'react';
import './Register.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
const Register = () => {
  return (
    <div className="auth-inner">
      <div className="alerts" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="my value"
            labelText="username"
            placeholder="Enter user Name"
            handleChange={() => {}}
          />
          <Input
            id="email"
            name="email"
            type="text"
            value="tester@gmail.com"
            labelText="email"
            placeholder="Enter user Email"
            handleChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter user Password"
            handleChange={() => {}}
          />
        </div>
        <Button
          label={'Register'}
          className="auth-button button"
          disabled={true}
        />

        <span className="forgot-password">
          Forgot password? <FaArrowRight className="arrow-right" />
        </span>
      </form>
    </div>
  );
};

export default Register;
