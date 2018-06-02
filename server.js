var express= require("express");
var app = express();

app.get('/', (req, res)=>{
    res.send('recivido');
});
app.listen(8080,()=>{
console.log('server on port 3000');
});