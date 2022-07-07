const mongoose = require('mongoose');

class DBClient {
    // Constructor that creates a client to MongoDB
    constructor() {

        const user = process.env.DB_USER || 'root';
        const pwd = process.env.DB_PWD || 'root';
        const database = process.env.DB_DATABASE || 'recotyre';

        mongoose.connect("mongodb+srv://" + user + ":" + pwd + "@cluster0.ss3bi.mongodb.net/?retryWrites=true&w=majority", (event) => {
            console.log("Connected to DB");
        }).catch(e => console.log(e));
    }

    isAlive() {
        // Returns if connection to MongoDB is success
        return !!this.db;
    }

}

// Instance of DBClient
const dbClient = new DBClient();
// Exports instance
module.exports = dbClient;