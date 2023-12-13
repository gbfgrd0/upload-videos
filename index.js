const express = require('express');
const path = require('path');
const app = express();

const videos = [
 "dQw4w9WgXcQ",
 "DLzxrzFCyOs",
 "viL44TzoBgE"
]

app.listen(3000, ()=>{
    console.log("Rodando o servidor!")
})

app.get('/api/videos', (req,res)=>{
    res.send(videos)
})

app.use(express.static(path.join(__dirname, '/front/build')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/front/build/index.html'))
})