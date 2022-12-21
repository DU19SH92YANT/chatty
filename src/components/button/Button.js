import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, className, disabled, handleClick } = props;
  return (
    <>
      <button className={className} onClick={handleClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
};

Button.prototype = {
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.function,
  disabled: PropTypes.bool,
};

export default Button;
