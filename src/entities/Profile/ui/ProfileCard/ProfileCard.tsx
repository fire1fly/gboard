import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, className)}>
      <div className={cls.header}>
        <Text tag="h1" size={TextSize.L} bold>{t('profile:pageTitle')}</Text>
        <Button
          theme={ButtonTheme.PRIMARY}
          size={ButtonSize.M}
          className={cls.btn_edit}
        >
          {t('buttonLabel:edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstname}
          label={t('form:label:name')}
          className={cls.field}
        />
        <Input
          value={data?.lastname}
          label={t('form:label:lastname')}
          className={cls.field}
        />
      </div>
    </div>
  );
};
