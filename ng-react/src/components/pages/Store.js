
import {Row,Col} from 'react-bootstrap';

import { productArray } from '../../productStore';
import ProductCart from '../productCart';


function Store(){

    return(
        <>
         <h1 className='text-center p-3'>Welcome to Store</h1>
          <div className='row'>
          
          {productArray.map((product,idx)=>(

                  <div className='col-md-4 text-center' key={idx}>
                   
                   <ProductCart product={product}/>
                  </div>

          ))}

            
           

          </div>

        </>
       
    )

}
export default Store;