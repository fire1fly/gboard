import {
  FC, HTMLAttributes, memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  className?: string;
  value?: string;
  onChange?: (value: any) => void;
  label?: string;
  outputMessage?: string;
  isError?: boolean;
  readonly?: boolean;
  options?: SelectOption[]
}

export const Select: FC<SelectProps> = memo((props) => {
  const {
    className = '',
    value,
    onChange,
    label,
    isError,
    outputMessage,
    readonly,
    options,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const refField = useRef<HTMLDivElement>(null);

  const checkFilled = useCallback(() => {
    if (value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);

  const onChangeHandle = useCallback((e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    setIsFocused(false);
    checkFilled();
    onChange?.(value);
  }, [onChange, checkFilled]);

  const optionsList = useMemo(() => options?.map((option) => (
    <div
      key={option.value}
      onClick={(e) => onChangeHandle(e, option.content)}
      className={cls.SelectListItem}
    >
      {option.content}
    </div>
  )), [options, onChangeHandle]);

  const onFocus = useCallback(() => {
    if (!readonly) {
      setIsFocused((prev) => !prev);
    }
  }, [readonly]);

  const onBlur = useCallback((e: MouseEvent) => {
    if (e.target !== refField.current) {
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    checkFilled();
    document.addEventListener('click', onBlur);
    return () => {
      document.removeEventListener('click', onBlur);
    };
  }, [checkFilled, onBlur]);

  const clsMods: ClassnamesMods = {
    [cls.SelectFieldFocused]: isFocused,
    [cls.SelectFieldFilled]: isFilled,
    [cls.SelectFieldWithoutLabel]: !label,
    [cls.SelectFieldError]: isError,
    [cls.SelectFieldReadonly]: readonly,
  };

  return (
    <div className={classNames(cls.SelectWrapper, className)}>
      <div
        ref={refField}
        className={classNames(cls.SelectField, clsMods)}
        onClick={onFocus}
        data-testid="select-field"
      >
        {
          label
            ? <div className={cls.SelectLabel} data-testid="select-label">{label}</div>
            : null
        }
        <span className={cls.SelectValue}>
          {
            value || ''
          }
        </span>
        <div className={cls.SelectListWrapper}>
          <div className={cls.SelectList}>
            {optionsList}
          </div>
        </div>
      </div>
      {
        outputMessage
          ? <div className={cls.SelectOutputMessage} data-testid="select-output">{outputMessage}</div>
          : null
      }
    </div>
  );
});
