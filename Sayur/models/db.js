const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/sayurOrders',{useNewUrlParser:true},(err)=>{
    if (!err) {
        console.log('Mongodb connected');
    } else {
        console.log('error:'+err);
    }
});
require('./order.model');