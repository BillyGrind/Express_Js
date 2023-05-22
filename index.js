// Ref au framework
const express =require('express');

//Faire appel au framework
const app = express();


app.get("/hello",(req,res) =>{

    res.send("hello world");

});


//serveur tourne sur localhost:3000/ pas sur le navigateur
app.listen(3000,()=>{
    console.log("Server Running");
});