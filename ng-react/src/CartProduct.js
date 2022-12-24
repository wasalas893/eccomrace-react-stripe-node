import  Button  from "react-bootstrap/Button";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import { getproductData } from "./productStore";

function CartProduct(props){

    const cart=useContext(CartContext);

    const id=props.id;
    const quantity=props.quantity;
    const productData=getproductData(id);

    return(
        <>
         <h3>{productData.title}</h3>
         <p>{quantity}</p>
         <p>${ (quantity * productData.price).toFixed(2)}</p>
         <Button size="sm" onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
         <hr></hr>
        
        </>
    )

}
export default CartProduct;