const express = require("Express");   
const app = express();               /*express() Creates express application*/


/*Sending back response to request made*/ 
app.get("/",function(request,response){

    response.send("<h1>Hello, nice to have you here</h1>");
});

app.listen(3000,function(){
    console.log("server started on port 3000");

});