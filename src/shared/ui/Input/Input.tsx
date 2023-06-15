import {
  FC, InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  label?: string;
  outputMessage?: string;
  isError?: boolean;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className = '',
    type,
    value,
    onChange,
    label,
    autofocus,
    isError,
    outputMessage,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const checkFilled = useCallback(() => {
    if (value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    checkFilled();
  };

  const onFocus = useCallback(() => {
    if (!readonly) {
      setIsFocused(true);
      refInput.current?.focus();
    }
  }, [readonly]);

  const onBlur = () => {
    setIsFocused(false);
    checkFilled();
  };

  useEffect(() => {
    checkFilled();
    if (autofocus) {
      onFocus();
    }
  }, [autofocus, checkFilled, onFocus]);

  const clsMods: ClassnamesMods = {
    [cls.InputFieldFocused]: isFocused,
    [cls.InputFieldFilled]: isFilled,
    [cls.InputFieldWithoutLabel]: !label,
    [cls.InputFieldError]: isError,
    [cls.InputFieldReadonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, className)}>
      <div
        className={classNames(cls.InputField, clsMods)}
        onClick={onFocus}
        data-testid="input-field"
      >
        {
          label
            ? <div className={cls.InputLabel} data-testid="input-label">{label}</div>
            : null
        }
        <input
          ref={refInput}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readonly}
          data-testid="input"
          {...otherProps}
        />
      </div>
      {
        outputMessage
          ? <div className={cls.InputOutputMessage} data-testid="input-output">{outputMessage}</div>
          : null
      }
    </div>
  );
});
