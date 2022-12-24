
import {Card,Button,Row,Col,Form} from 'react-bootstrap';
import { CartContext } from '../cartContext';
import {useContext} from 'react';

function ProductCart(props){

    const product=props.product;

    const cart=useContext(CartContext);

    const productQuantity=cart.getProductQuntity(product.id);

    console.log(cart.items);

    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {productQuantity > 0 ?
                <>

                <Form as={Row}>
                    <Form.Label column="true" sm="6">In Cart: {productQuantity  }</Form.Label>
                    <Col sm="6">
                        <Button sm="6" className='mx-2' onClick={()=>cart.addOneToCart(product.id)}>+</Button>
                        <Button sm="6" className='mx-2' onClick={()=>cart.removeOneFormCart(product.id)}>-</Button>
                    </Col>

                </Form>
                <Button onClick={()=>cart.deleteFromCart(product.id)} variant='danger' className='my-2'>Remove from cart</Button>
                
                
                </>
                :
                <Button variant='primary' onClick={()=>cart.addOneToCart(product.id)}>Add to Cart</Button>
                 }
              
            </Card.Body>
        </Card>
    )


}
export default ProductCart;