/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import { useField } from 'formik';
import Image from 'next/image';
import React, { useRef, useId } from 'react';
import ControlLabel from '~/components/UI/ControlLabel';
import s from './InputFile.module.scss';

const FileInput = ({
  placeholder,
  ...props
}) =>
{
  const id = useId();

  const [ field, meta, helpers ] = useField(props);
  const inputRef = useRef();

  const handleClick = () =>
  {
    if (field.value) return null;
    return inputRef.current.click();
  };

  const onInputChange = (e) =>
  {
    helpers.setTouched(true);
    helpers.setValue(e.currentTarget.files[0]);
  };

  const onClearFile = () =>
  {
    helpers.setValue(null);
  };

  const error = meta.touched && meta.error;
  const success = meta.touched && !meta.error && props.showSuccessMessage && props.successMessage;

  return (
    <>
      <ControlLabel { ...props } id={ id } />
      <div
        onClick={ handleClick }
        className={ cn(s['file-input'], { [s.error]: error }) }
        title={ error || success || '' }
      >
        <div className={ s.fileInput__fileName }>
          {field.value?.name?.split('fakepath\\').at(-1) || (placeholder && <span className={ s.fileInput__placeholder } />)}
        </div>
        <div className={ s.fileInput__input }>
          {field.value && (
            <Image
              src="/images/icons/close.svg"
              width={ 30 }
              height={ 30 }
              alt="Clear file"
              className={ s.fileInput__clear }
              onClick={ onClearFile }
            />
          )}
        </div>
        <input type="file" ref={ inputRef } onChange={ onInputChange } id={ id } />
      </div>
    </>
  );
};

export default FileInput;
