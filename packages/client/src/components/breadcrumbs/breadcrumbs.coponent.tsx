import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  useHistory,
  Link as RouterLink,
  useRouteMatch,
} from 'react-router-dom';

const breadcrumbNameMap: { [key: string]: string } = {
  '/': 'Events',
  '/event/:id': 'Event',
  '/event/:id/edit': 'Event Editing',
  '/applicants': 'Applicants',
};

export const MyBreadcrumbs = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const match = useRouteMatch();

  const pathnames = history.location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} color="inherit" to="/">
        {t('navigation.events')}
      </Link>
      {/* <Typography color="textPrimary">{t('navigation.event_edit')}</Typography> */}
    </Breadcrumbs>
  );
};
