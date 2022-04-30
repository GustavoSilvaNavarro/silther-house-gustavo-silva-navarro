//CALL MODULES
import { Container, Typography, Box, Grid } from '@mui/material';

//EXPORTING COMPONNET
export const ItemDetail = ({ itemProduct }) => {
    //RENDERING COMPONENT
    return (
        <Container>
            <Typography align='center' variant='h2'>{itemProduct.name}</Typography>
            <Box className='mb-3 mt-2'>
                <Grid container spacing={2}>
                    <Grid textAlign='center' item xs={12} sm={6} md={6} lg={6}>
                        <img className='imageDetails' src={itemProduct.url} alt={itemProduct.name} loading='lazy' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Typography variant='h4'>{itemProduct.description}</Typography>
                        <Box className='d-flex flex-column'>
                            <Box className='d-flex align-items-center justify-content-around'>
                                <p className='fs-4'>Stock: <span>{itemProduct.stock}</span></p>
                                <p className='fs-4'>Category: {itemProduct.category}</p>
                            </Box>
                            <p className='text-center fs-4'>Price: USD <span className='fw-bold'>{itemProduct.price}</span></p>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};