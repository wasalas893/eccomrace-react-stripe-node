
import {Button,Container,Navbar,Modal} from 'react-bootstrap';
import { useState,useContext} from 'react';
import { CartContext } from '../../../cartContext';
import ProductCart from '../../productCart';
import CartProduct from '../../../CartProduct';


function Header(){

    const cart=useContext(CartContext);

    const [show,setshow]=useState(false);

    const handleClose=()=>setshow(false);

    const handleShow=()=>setshow(true);

    const checkout= async ()=>{
        await fetch('http://localhost:4000/checkout',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                items:cart.items
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{

            if(response.url){
                window.location.assign(response.url);
            }
        })
    }


const productCount=cart.items.reduce((sum,product)=>sum + product.quantity,0);





    return(
        <>
        <Navbar expand="sm">
            <Navbar.Brand href='/'>Ecommerce store</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}>Cart ({productCount} Items)</Button>

            </Navbar.Collapse>

        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shoping Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                
                { productCount > 0 ?

                  <>
                  <p>Items in your cart:</p>
                  {cart.items.map((currentProduct,idx)=>(
                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                  ))}

                  <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>
                  <Button variant='success' onClick={checkout}>Purchase items!</Button>
                  </>
                
                 :

                 <h3>There are no items in your cart!</h3>
            
                }
            </Modal.Body>



        </Modal>

        </>
    )
}

export default Header;