const mongoose = require('mongoose');

const DB_NAME = 'soebookbd';

module.exports = {
    _dbClient: null,
    connect: async function(url) {
        // Use connection pool size of 10 by default
        const client = await mongoose.connect(url, {            
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Cosmos DB's API for MongoDB connected")
        this._dbClient = client;
    },
    
    getConnection: function() {
        if (!this._dbClient) {
            console.log('You need to call .connect() first!');
            process.exit(1);
        }
        return this._dbClient.db(DB_NAME);
    }
}