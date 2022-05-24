import { Container, Grid } from '@mui/material';

import { Item } from './Item';

export const ItemList = ({ products, emptyProduct }) => {
    return (
        <Container maxWidth="lg" className='mb-5 mt-3'>
            { products.length > 0 ? (
                <Grid container spacing={2}>
                    { products.map(product => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Item key={product.id} product={product} />
                        </Grid>
                    ))}
                </Grid>
            ) : emptyProduct }
        </Container>
    )
};