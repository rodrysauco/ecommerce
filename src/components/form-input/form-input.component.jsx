import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-input'>
    <input className='form-input__input' onChange={handleChange} {...otherProps} />
    {
      label ?
        <label className={`form-input__label ${otherProps.value.length ? 'form-input__label--shrink' : ''}`}>
          {label}
        </label>
        : null
    }
  </div>
)

export default FormInput;