/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useId } from 'react';
import cn from 'classnames';
import { useField } from 'formik';
import ControlLabel from '~/components/UI/ControlLabel';
import s from './InputFile.module.scss';

const FileInput = ({
  placeholder,
  ...props
}) => {
  const id = useId();
  const [ field, meta, helpers ] = useField(props);
  const inputRef = useRef();
  const error = meta.touched && meta.error;

  const handleClick = () => {
    if (field.value) return null;
    return inputRef.current.click();
  };
  const onInputChange = (e) => {
    if (!error) {
      const selectedFiles = Array
        .from(e.currentTarget.files)
        .slice(0, 3 - (field.value?.length || 0));
      const fileList = Array.isArray(field.value)
        ? [ ...field.value, ...selectedFiles ]
        : selectedFiles;
      helpers.setTouched(true);
      helpers.setValue(fileList);
    }
  };

  const onClearFile = (fileIndex) => {
    const updatedFiles = field.value.filter((_, index) => index !== fileIndex);
    helpers.setValue(updatedFiles);
  };

  const onClearAllFile = () => {
    helpers.setValue([]);
  };

  return (
    <>
      <div className={ cn(s['file-input'], { [s.error]: error }) }>
        <ControlLabel className={ s['file-input__label'] } { ...props } id={ id }>
          <svg className={ s['upload-icon'] }><use href="./sprite.svg#file" /></svg>
        </ControlLabel>
        <div
          className={ s['file-input__wrapper'] }
          onClick={ handleClick }
        >
          {field.value && field.value.length > 0 && !error ? (
            field.value.map((file, index) => (
              <div key={ index } className={ s['file-item'] }>
                <span className={ s.name }>{file.name}</span>
                <svg className={ s.close } onClick={ () => onClearFile(index) }><use href="./sprite.svg#delete" /></svg>
              </div>
            ))
          ) : (
            <div className={ s['file-item'] }>
              <span className={ s.name }>
                {error ? meta.error : 'no file chosen'}
              </span>
              {error && <svg className={ s.close } onClick={ () => onClearAllFile() }><use href="./sprite.svg#delete" /></svg>}
            </div>
          )}
          <input type="file" ref={ inputRef } onChange={ onInputChange } id={ id } multiple />
        </div>

      </div>
      <p className={ s.notice }>
        <span>Upload up to 3 images of your project</span>
        <span>
          Total file size cannot exceed 10MB and must be
          .png, .jpg, or .jpeg format. Also please remove
          special characters from name of file (including spaces).
        </span>
      </p>
    </>
  );
};

export default FileInput;
