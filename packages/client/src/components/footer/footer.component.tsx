import { Copyright } from '../copyright.component';
import Typography from '@material-ui/core/Typography';

export const Footer = () => {
  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </>
  );
};
