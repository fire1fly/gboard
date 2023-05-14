import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('notFound')}</h1>
      <Link to="/">{t('linkToMainPage')}</Link>
    </div>
  );
};

export default NotFoundPage;
