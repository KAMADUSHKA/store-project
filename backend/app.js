const express = require('express');
const app = express();
const user = require ('./routers/user')

//midleware
// app.use(log);

app.use(express.json());
app.use('/api/users',log,user)


function log(req,res,next){
console.log('cheking middleware');
next();
}


const port = process.env.PORT || 3000

app.listen(port);
console.log(`app is runing on ${port}`)