import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';

// Components
import ProductCard from '../components/product-card.component';

const HomeScreen = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetchProducts();
    }, []);

    // Methods
    const fetchProducts = async () => {
        const { data } = await axios.get('/api/products');
        console.log(data);
    }

    return(
        <>
            <h1>Latest Products</h1>
            <Row>
          
            </Row>
            
        </>
    )
}

export default HomeScreen;