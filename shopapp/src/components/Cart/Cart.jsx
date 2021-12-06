import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography style={{paddingTop:'10px',marginLeft:'10px'}} variant="subtitle2">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={1}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={12} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <Paper>
      <div className={classes.cardDetails} style={{padding:'20px'}}>
        <Typography variant="h6">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div style={{marginRight:'3%'}}>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} style={{backgroundColor:'dimgray'}}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary" style={{backgroundColor:'darkblue'}}>Checkout</Button>
        </div>
      </div>
      </Paper>
    </>
  );

  return (
    
    <Container>
      <div className={classes.toolbar} />
      <Paper style={{backgroundColor:'black'}} className={classes.title}>
      <Typography className={classes.title} variant="h5" gutterBottom style={{padding:'20px',color:'white'}}>Your Shopping Cart:</Typography></Paper>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
    
  );
};

export default Cart;