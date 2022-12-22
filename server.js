const express = require("express");
const app =express();
const newsRouter = require("./routes/newsRoute")
const highlightsRouter = require("./routes/highlightsRoute")
const standingRouter = require("./routes/standingTable")
const teamsRouter = require("./routes/teamsRoute")
app.use(express.json({limit:`1mb`}))
const dotenv = require("dotenv").config();


app.use(express.urlencoded({extended: false}))
const port = process.env.PORT || 7000;



app.use("/news" , newsRouter);

app.use("/highlights" , highlightsRouter)

app.use("/standingTable" , standingRouter)

app.use("/teamsRoute" , teamsRouter)


app.get("/",(req,res)=>{
        res.send("footscore api running")
})

app.listen(port , ()=>{
    
    console.log(`server is running on port ${port}`);
})