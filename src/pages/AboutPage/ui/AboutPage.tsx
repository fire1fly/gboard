import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const {t, i18n} = useTranslation('about');
  return (
    <div>
      <h1>{t("О сайте")}</h1>
      <Link to="/">To main page</Link>
    </div>
  )
}

export default AboutPage;