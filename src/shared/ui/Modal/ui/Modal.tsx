import React, {
  FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Protal/Portal';
import { useTheme } from 'shared/lib/useTheme';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean,
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    // if (isOpen) {
    window.addEventListener('keydown', onKeyDown);
    // }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const { theme } = useTheme();
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
    // temporary solution (redifining theme variables)
    [cls[theme]]: true,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, className, mods)}>
        <div role="presentation" className={cls.overlay} onClick={closeHandler}>
          <div role="presentation" className={cls.content} onClick={onContentClick}>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};
