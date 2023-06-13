import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  Text, TextAlign, TextColor, TextSize,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChageFirstname?: (value: string) => void;
  onChageLastname?: (value: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChageFirstname,
    onChageLastname,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, className)}>
        <Loader className={cls.loader} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, className)}>
        <Text
          tag="h2"
          bold
          color={TextColor.error}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.error}
        >
          {t('errors:profileLoading')}
        </Text>
        <Text
          tag="p"
          color={TextColor.error}
          size={TextSize.M}
          align={TextAlign.CENTER}
          className={cls.error}
        >
          {t('errors:reload')}
        </Text>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, className)}>
      <div className={cls.data}>
        <Input
          value={data?.firstname}
          label={t('form:label:name')}
          className={cls.field}
          onChange={onChageFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          label={t('form:label:lastname')}
          className={cls.field}
          onChange={onChageLastname}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
