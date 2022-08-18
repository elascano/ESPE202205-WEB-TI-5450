//db.js

const mongoose = require('mongoose')
const user = process.env.USER;
const password = process.env.PASSWORD;

const url = `mongodb+srv://${user}:${password}@cluster0.9knxc.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })