import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, logout } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar)}>
        <div className={cls.links}>
          <Button
            theme={ButtonTheme.OUTLINE}
            size={ButtonSize.S}
            onClick={onLogout}
          >
            {t('logout_label')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.OUTLINE}
          size={ButtonSize.S}
          onClick={onOpenModal}
        >
          {t('signIn_label')}
        </Button>
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      </div>
    </div>
  );
};
