import express from 'express';

const app = express();
const port = 80;

app.get('/', (req, res)=>{
    res.send("Kidda fer")
})

app.listen(port, ()=>{
    console.log(`Listeing on port ${port}`)
});