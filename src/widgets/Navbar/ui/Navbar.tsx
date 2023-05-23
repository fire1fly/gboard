import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.OUTLINE}
          size={ButtonSize.S}
          onClick={onToggleModal}
        >
          {t('signIn_label')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          {t('signIn_label')}
        </Modal>
      </div>
    </div>
  );
};
