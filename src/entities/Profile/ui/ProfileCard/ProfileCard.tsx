import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import {
  Text, TextAlign, TextColor, TextSize,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeCountry?: (value: Country) => void;
  onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeUsername,
    onChangeAvatar,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
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

  const clsMods: ClassnamesMods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, className, clsMods)}>
      <div className={cls.data}>
        {
          data?.avatar
            ? (
              <div className={cls.avatarWrapper}>
                <Avatar
                  src={data?.avatar}
                  alt={data?.username}
                  size={150}
                  className={cls.avatar}
                />
              </div>
            )
            : null
        }
        <Input
          value={data?.firstname}
          label={t('form:label:name')}
          className={cls.field}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          label={t('form:label:lastname')}
          className={cls.field}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          label={t('form:label:username')}
          className={cls.field}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          label={t('form:label:avatarUrl')}
          className={cls.field}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          label={t('form:label:age')}
          className={cls.field}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          label={t('form:label:city')}
          className={cls.field}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <CountrySelect
          label={t('form:label:country')}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
          className={cls.field}
        />
        <CurrencySelect
          label={t('form:label:currency')}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
          className={cls.field}
        />
      </div>
    </div>
  );
};
