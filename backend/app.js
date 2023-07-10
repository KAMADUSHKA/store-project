const express = require('express');
const app = express();
const user = require ('./routers/user')

app.use('/api/users',user)



const port = process.env.PORT || 3000

app.listen(port);
console.log(`app is runing on ${port}`)