import React from 'react';
import { useField } from 'formik';
import s from './RadioGroupe.module.scss';

const RadioGroup = ({
  label, name, options, required, ...props
}) => {
  const [ field, meta ] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    field.onChange({ target: { name, value: value === 'true' } });
  };

  const handleKeyDown = (event, option) => {
    if (event.key === 'Enter') {
      // event.preventDefault();
      field.onChange({ target: { name, value: option.value === 'true' } });
    }
  };

  return (
    <div className={ s.radio }>
      <span className={ s.label }>
        {label}
        {required && ' *'}
      </span>
      {options.map((option) => (
        <label
          htmlFor={ option.label }
          key={ option.label }
          className={ s.radio__wrapper }
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={ 0 }
          onKeyDown={ (event) => handleKeyDown(event, option) }
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="radio"
          aria-label="radio button"
          aria-checked={ field.value === (option.value === 'true') }
        >
          <input
            type="radio"
            id={ option.label }
            { ...field }
            { ...props }
            value={ option.value }
            checked={ field.value === (option.value === 'true') }
            onChange={ handleChange }
          />
          <span className={ s.mark } />
          {option.label}
        </label>
      ))}
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default RadioGroup;
