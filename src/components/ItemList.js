//CALL MODULES
import { Container, Grid } from '@mui/material';

//IMPORTING COMPONENTS
import { Item } from './Item';
import { ItemCount } from './ItemCount';

//EXPORT FUNCTION COMPONENT
export const ItemList = ({ products, emptyProduct }) => {
    //FUNCTIONS
    const onAdd = numberAdded => {
        console.log(numberAdded)
    };

    //RENDERING COMPONENT
    return (
        <Container maxWidth="lg">
            { products.length > 0 ? (
                <Grid container spacing={2}>
                    { products.map(product => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Item key={product.id} product={product} />
                            <ItemCount stockProduct={product.stock} initial="00" onAdd={onAdd} />
                        </Grid>
                    ))}
                </Grid>
            ) : emptyProduct }
        </Container>
    )
};