import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalProps } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps extends ModalProps {
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(className)}
      lazy
    >
      <Suspense fallback={(
        <div className={cls.LoginModal__loader}>
          <Loader />
        </div>
      )}
      >
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
