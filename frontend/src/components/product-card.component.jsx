import { Card } from 'react-bootstrap';

// Router
import { Link } from 'react-router-dom';

// Components
import Rating from '../components/rating.component';

const ProductCard = ({ product }) => {
    return(
        <Card className='my-3 p-3 rounded'>
            <Link to={`product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{ product.name }</strong>
                    </Card.Title>
                </Link>
            </Card.Body>


            <Card.Text as='div'>
                <Rating value={product.rating}  text={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as='h3'>
                { product.price }
            </Card.Text>

        </Card>
    )
}




export default ProductCard;