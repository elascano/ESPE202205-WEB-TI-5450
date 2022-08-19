const express = require("express");
const app = express();
const PUERTO = 3001;
const mongoose = require("mongoose");
const customerRoutes = require("./routes/controller") 


app.use(express.json()); 
app.use('/computerstore', customerRoutes);

app.get('/', (req,res) => {
    res.send('Welcome to my API on port ' + PUERTO)
});

const URL="mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority"

mongoose

.connect(URL)
.then(() => console.log("MongoDB connected")) 
.catch((error) => console.error(error)); 


//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//status server
app.listen(PUERTO, () => console.log('Server is listening on port',PUERTO));
