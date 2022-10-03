const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const app = express();
const date = require(`${__dirname}/date.js`);
console.log(date);
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items=[];
const workItems=[];

app.get("/",(req,res)=>{
    const day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
    res.end();
})

app.post("/", (req,res)=>{
    console.log(req.body);
    if(req.body.typeOfList === "Work "){
        workItems.push(req.body.newItem);
        res.redirect("/work");
    }else{
        items.push(req.body.newItem);
        res.redirect("/");
    }
    
})

app.get("/work",(req,res)=>{
    res.render("list",{
        listTitle: "Work",
        newListItems : workItems
    })
});

app.get("/about", (req,res)=>{
    res.render("about");
});


app.listen(5000, ()=>{
    console.log("app is running on port 5000");
})