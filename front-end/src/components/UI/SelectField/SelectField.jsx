/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useField } from 'formik';
import ControlLabel from '~/components/UI/ControlLabel';
import cn from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { SlideDown } from '../SlideDown/SlideDown';
import s from './Select.module.scss';

export default function SelectField({
  placeholder = '',
  name,
  label,
  required,
  options,
  ...props
}) {
  const [ field, meta, helpers ] = useField(name);
  const [ open, setOpen ] = useState(false);
  const selectRef = useRef(null);

  const handleChange = (selectedOption) => {
    helpers.setValue(selectedOption);
    setOpen(false);
  };

  const handlerKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setOpen(!open);
    }
  };

  const handlerOptionKeyDown = (event, selectedOption) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleChange(selectedOption);
    }
  };

  const handleBlur = () => {
    helpers.setTouched(true);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fullfieldCondition = field.value !== ''
  && (!meta.error || !meta.touched)
  && meta.touched;

  const classNames = cn(s.select__input, {
    [s.error]: meta.error && meta.touched,
    [s.fullfield]: fullfieldCondition,
  });

  return (
    <div className={ s.select } ref={ selectRef }>
      <ControlLabel id={ name } label={ label } required={ required } />
      <div className={ cn(s.select__wrapper, {
        [s.active]: open,
      }) }
      >
        <input
          type="text"
          readOnly
          value={ field.value }
          className={ classNames }
          onClick={ () => setOpen(!open) }
          onBlur={ handleBlur }
          onKeyDown={ handlerKeyDown }
          placeholder={ placeholder }
          { ...props }
        />
        <div className={ s.select__arrow }>
          <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0298 17.5L23.7398 26.25L33.4497 17.5H14.0298Z" fill="white" />
          </svg>
        </div>
      </div>
      <SlideDown closed={ !open }>
        <ul className={ s.select__list }>
          <li className={ cn(s.select__item, s.select__item_first) }>
            -Select-
            {' '}
            <span className={ s['select__item-mark'] } />
          </li>
          {options.map((option) => (
            <li
              key={ option }
              className={ cn(s.select__item, {
                [s.selected]: field.value === option,
              }) }
              onClick={ () => handleChange(option) }
              onKeyDown={ (e) => handlerOptionKeyDown(e, option) }
              onBlur={ handleBlur }
              tabIndex={ 0 }
            >
              <span className={ s['select__item-mark'] } />
              {option}
            </li>
          ))}
        </ul>
      </SlideDown>
    </div>
  );
}
