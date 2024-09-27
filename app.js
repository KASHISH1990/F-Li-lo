const express = require("express");

const app= express();
app.use(express.static("public"));
app.set("view engine", "hbs");

// Home route
app.get("/", (req,res)=>{
        res.render("Home");

})



// Registration route
app.get("/registration", (req,res)=>{
        res.render("Registration");

})



// Login route
app.get("/login", (req,res)=>{
    res.render("Login");

})


app.listen("3909", ()=>{
    console.log("Server started on port 3909");
})