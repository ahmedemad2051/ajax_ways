const express= require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.post('/sendMessage',(req, res)=>{
    messages.push(req.body);
    res.status(204).end();
});

app.get('/messages',(req, res)=>{
    res.json(messages);
});


// ***********   long *******************
let subscribers = [];

app.post('/long/sendMessage',(req, res)=>{
    Object.keys(subscribers).forEach(id =>{
        subscribers[id].json(req.body);
        delete subscribers[id];
    });
    res.status(204).end();
});

app.get('/long/messages',(req, res)=>{
    let id= Math.ceil(Math.random*45623);
    subscribers[id]= res;
});


app.listen(3000,()=>{
    console.log("Server listening on port 3000 ");
});