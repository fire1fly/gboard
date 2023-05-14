import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { t, i18n } = useTranslation(['translation', 'about']);
  return (
    <div>
      <h1>{t('about:pageTitle')}</h1>
      <Link to="/">{t('translation:linkToMainPage')}</Link>
    </div>
  );
};

export default AboutPage;
