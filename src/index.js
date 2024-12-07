import express from 'express';

const app = express();
const port = 443;

app.get('/', (req, res)=>{
    res.send("Hello om mittal")
})

app.listen(port, ()=>{
    console.log(`Listeing on port ${port}`)
});