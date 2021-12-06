import { makeStyles } from '@material-ui/core/styles';
import "react-slideshow-image/dist/styles.css"

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingTop:100,
  },
  root: {
    flexGrow: 1,
  },
}));