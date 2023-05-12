import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  const {t, i18n} = useTranslation();
  return (
    <div>
      <h1>{t('Не найдено')}</h1>
      <Link to="/">To main page</Link>
    </div>
  )
}

export default NotFoundPage;
