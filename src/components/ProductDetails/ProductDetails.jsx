import React, { useState } from 'react';
import { Card,CardActionArea, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';


const ProductDetails = ({ product, onAddToCart }) => {
    const classes =useStyles();
    
    const [quantity, setQuantity] = useState(0);

    return (
    <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Card className={classes.root} xs={1} sm={1} md={1} lg={1} >
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => {if(quantity > 0) setQuantity(quantity - 1)}}>-</Button>
                        <Typography>{ quantity }</Typography>
                        <Button type="button" size="small" onClick={() => setQuantity(quantity + 1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="primary" onClick={() => onAddToCart(product.id, quantity)}>Add to Cart</Button>
                </CardActions>
            </Card>
    </main>
       
    )
}

export default ProductDetails
