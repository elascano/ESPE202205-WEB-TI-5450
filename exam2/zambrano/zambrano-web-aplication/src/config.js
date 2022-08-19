import { config } from 'dotenv';
config();

module.exports = {
    URI : process.env.DB_URI_MONGO,
    PORT : process.env.PORT,
}
