//CALL MODULES
import { Container, Grid } from '@mui/material';

//IMPORTING COMPONENTS
import { Item } from './Item';

//EXPORT FUNCTION COMPONENT
export const ItemList = ({ mealOptions, emptyProduct }) => {
    //RENDERING COMPONENT
    return (
        <Container maxWidth="lg">
            { mealOptions.length > 0 ? (
                <Grid container spacing={2}>
                    { mealOptions.map(meal => (
                        <Grid key={meal.id} item xs={12} sm={6} md={4} lg={3}>
                            <Item key={meal.id} dish={meal} />
                        </Grid>
                    ))}
                </Grid>
            ) : emptyProduct }
        </Container>
    )
};