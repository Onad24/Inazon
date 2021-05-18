import React from 'react';
import { Card,CardActionArea, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product, onAddToCart, onProductClick }) => {
    const classes = useStyles();
    return(
            <Card className={classes.root}>
                <CardActionArea onClick={() => onProductClick(product)} component={ Link } to="/productDetails">
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
                </CardActionArea>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
    );
}

export default Product;
