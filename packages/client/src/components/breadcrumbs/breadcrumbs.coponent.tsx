import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import { adminRoutes } from '../../router/routes';

export const MyBreadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();

  let matchedRoutes = matchRoutes(adminRoutes, location.pathname);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} color="inherit" to="/">
        {t('navigation.events')}
      </Link>
      {matchedRoutes.map((value, idx) => {
        return value.route.path === location.pathname ? (
          <Typography color="primary" key={idx}>
            {value.route.breadcrumbName}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={value.route.path}
            key={idx}
          >
            {value.route.breadcrumbName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
