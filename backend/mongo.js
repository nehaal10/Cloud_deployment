const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/finance', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database');
    }
}); 

app.listen(3000, function() {
    console.log('server is running on port 3000');
  } 
);  

app.get('/', (req, res) => {
    res.send('<h1>Finance</h1>');
}
);
