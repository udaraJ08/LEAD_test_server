const express = require('express');
const app = express();

////using modules

////middlewares use
app.use(express.json())

////mongoDB config

////server listen
app.listen(3000, () => {
    console.log("Server is listening !!!");
})

////GET methods

app.get("/", (req, res) => {
    res.send("Do you want panadol ???");
})

app.get("/data", (req, res) => {

    res.status(202).send("send-panadol")
})

////POST methods
app.post("/post-data", (req, res) => {

    const name = req.query.name
    const address = req.query.address
})

app.post('/json-data', (req, res) => {
    res.send(req.body)
})
//GET
//POST
//PUT
//DELETE