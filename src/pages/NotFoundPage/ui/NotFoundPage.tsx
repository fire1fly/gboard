import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import image404 from 'shared/assets/images/error-404.png';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage)}>
      <div className={cls.NotFoundPage__inner}>
        <img src={image404} alt="404" className={cls.NotFoundPage__image} />
        <h1 className={cls.NotFoundPage__title}>{t('notFound')}</h1>
        <Link to="/">{t('linkToMainPage')}</Link>
      </div>
    </div>
  );
};
