const express= require('express');
const http = require('http');
const cors = require('cors');

const app = express();


const server = http.createServer(app);
const io = require('socket.io')(server);
app.use(cors());
app.use(express.json());


io.on('connection', (client)=>{
    client.on('sendMessage',(data)=>{
        io.emit('newMessage', data);
    });
});

// let subscribers = [];

// app.get('/messages',(req, res)=>{
//     subscribers.push(res);
//     res.writeHead(200, {
//         'Content-Type': 'text/event-stream'
//     });
// });

// app.post('/sendMessage',(req, res)=>{
//     subscribers.forEach((s)=>{
//         s.write(`data: ${JSON.stringify(req.body)}\n\n`);
//     });
//     res.status(204).end();
// });

server.listen(3000,()=>{
    console.log("Server listening on port 3000 ");
});