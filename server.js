require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 5000;



app.use(express.json({extended: false }));
app.use('/api/email',require('./routes/api/email'));


if (process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'));
app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'));

  });
}



app.listen(port,()=>{
  console.log(`Server is up at ${port}`);
})
