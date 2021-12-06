import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Paper } from '@material-ui/core';

import useStyles from './styles';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Paper>
    <List >
    <ListItem>
      <ListItemAvatar>
        <Avatar src={item.media.source} alt={item.name} >
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.line_total.formatted_with_symbol}/>
      <div className={classes.buttons}>
        {/* <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div> */}
        <Button className={classes.removeButton} variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)} style={{backgroundColor:'gray'}}>Remove</Button>
        </div>
    </ListItem>
  </List>
  </Paper>
  );
};

export default CartItem;