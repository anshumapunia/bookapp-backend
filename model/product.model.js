const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
    image:String,
    bookname:String,
    price:String,
    // brand:String
},
{
    versionKey:false
}

)

const ProductModel= mongoose.model("product",userSchema)

module.exports={
    ProductModel
}