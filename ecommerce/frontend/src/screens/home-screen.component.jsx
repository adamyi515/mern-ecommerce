import React from 'react';
import products from '../products';
import { Row, Col} from 'react-bootstrap';

// Components
import ProductCard from '../components/product-card.component';

const HomeScreen = () => {
    return(
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) =>
                    (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                            <ProductCard product={product} />
                        </Col>
                    )
                )}
            </Row>
            
        </>
    )
}

export default HomeScreen;