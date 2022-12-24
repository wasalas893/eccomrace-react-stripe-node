import {createContext,useState} from 'react';
import { productArray,getproductData } from './productStore';

export const CartContext=createContext({

    items:[],
    getProductQuntity: () => {},
    addOneToCart: ()=> {},
    removeOneFormCart:()=>{},
    deleteFromCart:()=>{},
    getTotalCost:()=>{},

});


export function CartProvider({children}){

    const [cartProducts,setCartProducts]=useState([]);

    //[ {id;1,quantity:3}, {id:2,quantity:1} ]

    function getProductQuntity(id){
        const quantity= cartProducts.find(product=>product.id===id)?.quantity //get quantity

        if(quantity===undefined){
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id){

        const quantity=getProductQuntity(id);

        if(quantity===0){ //product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id:id,
                        quantity:1
                    }
                ]
            )



        }else{//product is in cart
                //[ {id;1,quantity:3}, {id:2,quantity:1} ]

            setCartProducts(
                cartProducts.map(
                    product=>product.id ===id ? {
                        ...product, quantity:product.quantity + 1 } //if statmet true
                        :product                                    //if statemet is false
                )
            )
        }
    }


function removeOneFormCart(id){
    const quantity=getProductQuntity(id);

    if(quantity===1){
        deleteFromCart(id);
    }else{
        setCartProducts(

            cartProducts.map(
                product=>product.id ===id ? {
                    ...product, quantity:product.quantity - 1 } //if statmet true
                    :product                                    //if statemet is false
            )

        )
    }
}    

function deleteFromCart(id){
    //[] if an object meets a condition, add thr object array,
    //[prodct1,product2,product3]
    //[product1,product3]

    setCartProducts(
        cartProducts=>
        cartProducts.filter(currentProduct=>{

            return currentProduct.id!=id;
        })
    )
}

function getTotalCost(){

    let totalCost=0;
    cartProducts.map((cartItem)=>{
        const productData=getproductData(cartItem.id);
        totalCost +=(productData.price * cartItem.quantity);
    })

    return totalCost;

}



    const contextValue={
        items:cartProducts,
        getProductQuntity,
        addOneToCart,
        removeOneFormCart,
        deleteFromCart,
        getTotalCost

    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;