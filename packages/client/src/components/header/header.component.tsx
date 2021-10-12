import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher.component';
import { useAuth } from '../../hooks/useAuth.hook';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const { isAuth, signOut } = useAuth();
  const { t } = useTranslation();
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.toolbarTitle}>
          Exadel Events
        </Typography>
        <nav>
          <ThemeSwitcher />
          <Link
            variant="button"
            color="inherit"
            component={RouterLink}
            to="/"
            className={classes.link}
          >
            {t('navigation.events')}
          </Link>
          <Link
            variant="button"
            color="inherit"
            component={RouterLink}
            to="/applicants"
            className={classes.link}
          >
            {t('navigation.applicants')}
          </Link>
        </nav>
        {!isAuth ? (
          <Button
            component={RouterLink}
            to="/signin"
            color="inherit"
            variant="outlined"
            className={classes.link}
          >
            {t('navigation.signin')}
          </Button>
        ) : (
          <Button
            onClick={signOut}
            color="inherit"
            variant="outlined"
            className={classes.link}
          >
            {t('navigation.signout')}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
