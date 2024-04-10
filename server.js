import express from 'express'
import cors from 'cors'
import {Server} from 'socket.io'
import http from 'http'



const app = express()

// create server using http

const server = http.createServer(app)

// create socket server

const io = new Server(server,{
    cors:{
        origin:"*",
        methods:['GET', "POST"]
    }
})


// use socket events

io.on('connection',(socket)=>{
    console.log('Connection is establised');
    socket.on('disconnect',()=>{
        console.log('Connection is disconected');
    })
})

server.listen(3500,()=>{
    console.log('Server is listening on 3500');
})