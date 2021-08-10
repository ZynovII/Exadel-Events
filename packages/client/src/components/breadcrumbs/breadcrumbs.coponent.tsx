import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const MyBreadcrumbs = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={clickHandler}>
        {t('navigation.events')}
      </Link>
      <Typography color="textPrimary">{t('navigation.event_edit')}</Typography>
    </Breadcrumbs>
  );
};
