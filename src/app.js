const path = require(`path`);
const express = require(`express`);
const app = express();
const hbs=require(`hbs`);
//process.env.PORT islia likha coz agar local
//pe ni chla toh jha se host kia wha chlagaa
const port = process.env.PORT || 8000;
//express works in top to bottom way
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
//to use as dynamic website
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
//to use static website
app.use(express.static(static_path));
//routing for home page
app.get("",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});
//* --> ka mtlb agar upar mh mention mh se koi b ni h toh error waala pg
app.get("*",(req,res)=>{
    res.render("404error",{
        errmsg: "Oops! Page Not found"
    });
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});