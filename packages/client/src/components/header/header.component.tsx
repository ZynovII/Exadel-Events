import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

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
  const { t } = useTranslation();
  return (
    <>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" noWrap className={classes.toolbarTitle}>
            Exadel Events
          </Typography>
          <nav>
            <Link
              variant="button"
              color="inherit"
              component={RouterLink}
              to="/"
              className={classes.link}
            >
              {t('events')}
            </Link>
            <Link
              variant="button"
              color="inherit"
              component={RouterLink}
              to="/applicants"
              className={classes.link}
            >
              {t('applicants')}
            </Link>
          </nav>
          <Button
            href="#"
            color="inherit"
            variant="outlined"
            className={classes.link}
          >
            {t('signin')}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
