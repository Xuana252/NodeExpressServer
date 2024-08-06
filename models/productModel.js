const mongoose = require('mongoose')


const productSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required: [true,'name is required']
        },
        quantity: {
            type:Number,
            required: [true],
            default: 0
        },
        price: {
            type: Number,
            require: [true],
            default:0
        },
        image: {
            type: String,
            required:false
        }
    },
    {
        timestamps:true,
    }
)

const Product = mongoose.model('Product',productSchema);

module.exports = Product