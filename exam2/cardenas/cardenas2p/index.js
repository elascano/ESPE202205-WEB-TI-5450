const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes") //call routes
const app = express();
const port = 3002;
//middleware
app.use(express.json()); //transfor to objecto json
app.use('/computerstore', customerRoutes);
//route app
app.get('/', (req,res) => {
    res.send('Welcome to my API on port ' +port)
});
//mongodb connection specify /dbname?
const MONGODB_URI="mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/computerstoredb?retryWrites=true&w=majority"

mongoose
//MongoDB connection 
.connect(MONGODB_URI)
.then(() => console.log("Conect to MongoDB Atlas")) 
.catch((error) => console.error(error)); 

//status server
app.listen(port, () => console.log('Server is listening on port',port));
