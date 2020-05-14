require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json({extended: false }));
app.use('/api/email',require('./routes/api/email'));

app.listen(port,()=>{
  console.log(`Server is up at ${port}`);
})
