
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 400,
  },
  cardStyle: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  removeButton: {
    minWidth: '150px',
  },
}));