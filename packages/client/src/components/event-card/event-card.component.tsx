import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardlink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
export const EventCard: FC<{ id: string }> = ({ id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/event/${id}`} className={classes.cardlink}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.cardActions}>
        <Button
          component={Link}
          to={`/event/${id}`}
          size="small"
          color="primary"
        >
          View
        </Button>
        <Button
          component={Link}
          to={`/event/${id}/edit/event-form`}
          size="small"
          color="primary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
