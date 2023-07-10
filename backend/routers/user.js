const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send({'msg':'Hello'});
});

router.post('/',(req,res)=>{
    res.status(200).send({'msg':'sucess post'});
})

module.exports = router;