const express = require("express");
const app = express();
const port = 8000;
const mongoDB=require("./db")

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://loccalhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "origin, X-Requested-With, Content-Type, Accept"
//     )
//     next();
// })
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json())
app.use('/api',require("./Routes/createUser"))
app.use('/api',require("./Routes/DisplayData"))
app.listen(port, () => {
  console.log(`connection successfull on port ${port}`);
});
mongoDB();
// setTimeout(() => {client.close()}, 1500)
