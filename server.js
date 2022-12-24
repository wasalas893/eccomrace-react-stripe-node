//pk_test_51Lx3WpF3eXLu8gE9j7I5uWH2gBMMaKGtcz6YF6SWdkDEWXc3YR3xwjbkVPZ1PntaftyxVx0Ao1q6xf6Qf6o4Oz3b00FTZBrFLS
// Coffe:price_1MIQDoF3eXLu8gE9DP58Z3jZ
//tea:price_1MIQIaF3eXLu8gE9mbmVQ75T
//food:price_1MIQJkF3eXLu8gE95lAuRXtj

const express=require('express');
var cors=require('cors');
const stripe=require('stripe')('sk_test_51Lx3WpF3eXLu8gE9uBsvciigncvniHAFoePJ2lad5aqkYVkGdWELuFgutKrNdDiG5NdbfXjUhMq1FAfR3ystHD6400yzgkSPe2');



const app=express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async (req,res)=>{


    const items=req.body.items;
    let lineItems=[];
    items.forEach((item)=>{
        
        lineItems.push(

            {
                price:item.id,
                quantity:item.quantity
            }
        )
    });

    const session=await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url:session.url
    }))

});

app.listen(4000,()=>console.log("Listening on port 4000 !"));





