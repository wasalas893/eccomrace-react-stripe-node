// Coffe:price_1MIQDoF3eXLu8gE9DP58Z3jZ
//tea:price_1MIQIaF3eXLu8gE9mbmVQ75T
//food:price_1MIQJkF3eXLu8gE95lAuRXtj

const productArray=[
    {
        id:"price_1MIQDoF3eXLu8gE9DP58Z3jZ",
        title:"Coffe",
        price:4.99

    },
    {
        id:"price_1MIQIaF3eXLu8gE9mbmVQ75T",
        title:"tea",
        price:6.99

    },
    {
        id:"price_1MIQJkF3eXLu8gE95lAuRXtj",
        title:"food",
        price:9.99

    }


];

function getproductData(id){
    let productdata=productArray.find(product=>product.id ===id);

    if(productdata == undefined){
      
        console.log("product data does not exit for ID:" + id);
        return undefined;
    }

    return productdata;
}

export { productArray,  getproductData };