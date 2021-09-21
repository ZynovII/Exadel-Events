import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Event } from '../../../../common types/dto/event/event.type';
import { stringSeparator } from '../../utils/stringSeparator';
import { SERVER_URL } from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
export const EventCard: FC<{ event: Event }> = ({ event }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/event/${event._id}`} className={classes.cardlink}>
        <CardMedia
          className={classes.cardMedia}
          image={
            SERVER_URL + event.imagePath || 'https://source.unsplash.com/random'
          }
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {event.title}
          </Typography>
          <Typography>{stringSeparator(event.description)}</Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.cardActions}>
        <Button
          component={Link}
          to={`/event/${event._id}`}
          size="small"
          color="primary"
        >
          View
        </Button>
        <Button
          component={Link}
          to={`/event/${event._id}/edit/event-form`}
          size="small"
          color="primary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
