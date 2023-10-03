

import { Box } from "@mui/material";
import Product from "./Product";
import { products } from "../constants/constant";

const Products = () => {

    return (
        <>
            <Box style={{ display: 'flex' }}>
                <Product data={products.watch} />
                <Product data={products.ipad} />
            </Box>
            <Box style={{ display: 'flex' }}>
                <Product data={products.macbook} />
                <Product data={products.homepod} />
            </Box>
            <Box style={{ display: 'flex' }}>
                <Product data={products.arcade} />
                <Product data={products.applewatch} />
            </Box>
        </>
    )
}

export default Products;