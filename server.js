const express = require("Express");   

const app = express();               /*express() Creates express application*/



/*Sending back response to request made*/ 
app.get("/",function(request,response){                                  /*targetting home route*/

    response.send("<h1>Hello, nice to have you here</h1>");
});

app.get("/contact",function(request,response){                            /*targetting contact route*/
    response.send("Connect me at :srishtivashisht52@gmail.com");
});

app.get("/about",function(request,response){                              /*targetting about route*/
    response.send("About us Page");
});

app.get("/hobbies",function(request,response){                                                                                              
    response.send("My Hobbies");
});


app.listen(3000,function(){                                      /*3000 is port here*/
    console.log("server started on port 3000");

});