const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/api';


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.Connection
db.on('error', console.error.bind(console, 'Error al conectar'))
db.once('open', function callback(){
    console.log("conectado")
})

module.exports  = db

