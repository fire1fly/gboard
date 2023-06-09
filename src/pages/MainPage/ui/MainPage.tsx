import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('MainPage:title')}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
