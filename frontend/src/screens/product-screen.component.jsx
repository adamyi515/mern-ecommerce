import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

// Components
import Rating from "../components/rating.component";

// Dummy data
import products from '../products';

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const foundProduct = products.find((item) => item._id === id);
        setProduct(foundProduct);
    }, [id]);

    return(
        <>
            <Link className="btn btn-light my-3" to='/'>
                Go back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{ product.name }</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${ product.price }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${ product.description }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${ product.price }</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Button className='btn btn-block' type='button' disabled={
                                        product.countInStock > 0 ? false : true
                                    }>
                                        Add to Cart
                                    </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        
        </>
    )
}

export default ProductScreen;