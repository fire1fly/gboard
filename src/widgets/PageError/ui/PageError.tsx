import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, className)}>
      <div className={cls.PageError__title}>
        {t('PageError:title')}
      </div>
      <Button
        onClick={reloadPage}
        className={cls.PageError__button}
        theme={ThemeButton.PRIMARY}
      >
        {t('PageError:reload')}
      </Button>
    </div>
  );
};
