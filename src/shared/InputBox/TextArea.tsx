import React from 'react';
import styles from './styles';

interface ITextArea {
  placeholder?: string;
  value?: string;
  inputClass?: string;
  wrapperClass?: string;
  errorMessage?: string;
  name?: string;
  rows?: number;
  maxLength?: number;
  onChange: (value: any) => void;
  onBlur: (value: any) => void;
  requiredField?: boolean;
}

const TextArea = ({
  placeholder,
  value,
  inputClass,
  wrapperClass,
  errorMessage,
  name,
  rows,
  maxLength,
  onBlur,
  onChange,
  requiredField,
}: ITextArea) => {
  return (
    <div className={`${wrapperClass}`}>
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        rows={rows || 4}
        onBlur={onBlur}
        onChange={onChange}
        required={requiredField}
        className={styles.textArea.textAreaClass(inputClass, errorMessage)}
      />
      {errorMessage && errorMessage.length > 0 ? (
        <p className={styles.textArea.textAreaErrorMessage}>{errorMessage}</p>
      ) : (
        <p className={styles.textArea.defaultText}>.</p>
      )}
    </div>
  );
};

export default TextArea;
