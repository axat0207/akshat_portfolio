const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 8000;


//Defing path variable
const staticPath = path.join(__dirname,"./public");
const partialPath = path.join(__dirname,'./templates/partials');
const viewPath = path.join(__dirname,'./templates/views');
const imgpath = path.join(__dirname,"./templates/partials/util")
//
app.set("view engine","hbs");
app.set('views',viewPath);
app.use(express.static(imgpath));
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));


//Routing
app.get('/',(req,res)=>{
    res.render("index")
})


//Port Calling

app.listen(port,()=>{
    console.log(`${port} port is working sucessfully`);
    console.log(__dirname);
})
