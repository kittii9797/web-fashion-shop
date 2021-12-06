import React from 'react'
import {CardMedia,CardContent,CardActions,Typography,IconButton, Paper,Button} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';



const Product = ({product, onAddToCart}) => {
    const classes = useStyles();

    return (
        <div>
        <div>
        <Paper elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h6" gutterBottom> 
                    {product.name}
                </Typography>
                <Typography variant="h6">
                    {product.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"/>
        </CardContent>
        <CardActions className={classes.cardActions} >
            <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id,1)}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
        </Paper>

        </div>
    </div>
    )
}

export default Product;





