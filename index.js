const express=require('express');
const server=express();
const mongoose=require('mongoose');
const ProductsRouters=require('./routes/Products')
const CategoriesRouters=require('./routes/Category')
const BrandRouters=require('./routes/Brand')



//middlewares
server.use(express.json());//to parse req.body
server.use('/products',ProductsRouters.router);//to parse req.body
server.use('/category',CategoriesRouters.router);
server.use('/brands',BrandRouters.router);



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("mongoose connected");
}




server.get('/',(req,res)=>{
   res.json({status:'success'})
})


server.listen(8080,()=>{
    console.log('server started')
})