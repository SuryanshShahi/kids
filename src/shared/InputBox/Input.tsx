import clsx from 'clsx';
import styles from './styles';

const Input = ({
  placeholder,
  value,
  inputClass,
  orderClass,
  wrapperClass,
  type,
  onChange,
  onBlur,
  maxLength,
  errorMessage,
  name,
  border,
}: any) => {
  return (
    <div className={clsx(wrapperClass)}>
      <div className={clsx(`relative`, orderClass)}>
        <input
          type={type ?? 'text'}
          placeholder={placeholder}
          value={value}
          name={name}
          maxLength={maxLength}
          onBlur={onBlur}
          onChange={(e) => {
            if (
              e.target.value.trim().length !== 0 ||
              e.target.value.length === 0
            ) {
              if (type !== 'tel' && type !== 'number') {
                onChange(e);
              } else if (!isNaN(Number(e.target.value))) {
                onChange(e);
              }
            }
          }}
          className={styles.inputBox.inputFieldClass(inputClass, errorMessage)}
        />

        {errorMessage && errorMessage.length > 0 ? (
          <p className={styles.inputBox.errorMessage}>{errorMessage}</p>
        ) : (
          <p className={styles.inputBox.defaultText}>.</p>
        )}
      </div>
    </div>
  );
};

export default Input;
