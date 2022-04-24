//CALL MODULES
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

//EXPORT FUNCTION COMPONENT
export const Item = ({ dish }) => {
    //RENDERING COMPONENT
    return (
        <Card>
            <CardMedia component="img" alt={dish.name} image={dish.url} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {dish.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dish.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">Order</Button>
            </CardActions>
        </Card>
    )
};