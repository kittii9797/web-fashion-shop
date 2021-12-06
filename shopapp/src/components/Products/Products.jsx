import React from 'react';
import {Grid} from '@material-ui/core';

import useStyles from './styles';
import Product from './Product/Product';


const products = [
{id:1, name:'dress1', description:'Second hand clothes.', price:'10$',image:'https://img.ltwebstatic.com/images3_pi/2020/12/26/160896708379ab16eb567d50ca89eaa7fab5a5133b_thumbnail_900x.webp'},
{id:2, name:'dress2', description:'Second hand clothes.', price:'15$',image:'https://img.ltwebstatic.com/images3_pi/2020/01/02/1577937372d86db23146decd8012e9a0813da6d2f7_thumbnail_900x.webp'}
];

const Products = ({products, onAddToCart}) =>{
    const classes
=useStyles();

    return(
<main className={classes.content} style={{backgroundColor:'white'}}>
    <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4} >
        {products.map((product)=> (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
        </Grid>
        ))}
    </Grid>
</main>
    );
}

export default Products;