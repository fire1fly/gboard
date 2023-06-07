import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ProfilePage.module.scss';
import { profileReducer } from '../model/slice/profileSlice';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation(['translation', 'profile']);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProfilePage, className)}>
        <h1>{t('profile:pageTitle')}</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
