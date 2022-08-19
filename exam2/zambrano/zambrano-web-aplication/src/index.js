import app from './app';
import config from './config';
import "./database/mongoDB"

app.listen(config.PORT, function () { 
    console.log(`Server listening on port: ${config.PORT}`)
})