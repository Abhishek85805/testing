import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello om mittal")
})

app.listen(port, ()=>{
    console.log(`Listring on port ${port}`)
});