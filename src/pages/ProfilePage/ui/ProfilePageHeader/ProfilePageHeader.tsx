import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    // TODO: write saveProfileData service
  }, []);

  return (
    <div className={classNames(cls.ProfilePageHeader, className)}>
      <div className={cls.header}>
        <Text tag="h1" size={TextSize.L} bold>{t('profile:pageTitle')}</Text>
        {
          readonly
            ? (
              <Button
                theme={ButtonTheme.PRIMARY}
                size={ButtonSize.M}
                className={cls.btn_edit}
                onClick={onEdit}
              >
                {t('buttonLabel:edit')}
              </Button>
            )
            : (
              <div className={cls.btnbar}>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  size={ButtonSize.M}
                  className={cls.btn_edit}
                  onClick={onCancel}
                >
                  {t('buttonLabel:cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.GREEN}
                  size={ButtonSize.M}
                  className={cls.btn_edit}
                  onClick={onSave}
                >
                  {t('buttonLabel:save')}
                </Button>
              </div>
            )
        }
      </div>
    </div>
  );
};
