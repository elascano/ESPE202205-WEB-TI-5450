import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect("mongodb+srv://ships:ships@cluster0.rw3cl.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB connected to ", db.connection.name);
    } catch (error) {
        console.log(error)
    }

})();