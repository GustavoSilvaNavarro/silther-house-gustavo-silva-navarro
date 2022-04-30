//CALL MODULES
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//EXPORT FUNCTION COMPONENT
export const Item = ({ product }) => {
    //RENDERING COMPONENT
    return (
        <Card>
            <CardMedia component="img" alt={product.name} image={product.url} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">
                    <Link to={`/item/${product.id}`}>See Details</Link>
                </Button>
            </CardActions>
        </Card>
    )
};