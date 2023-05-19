import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('MainPage:title')}</h1>
    </div>
  );
};

export default MainPage;
