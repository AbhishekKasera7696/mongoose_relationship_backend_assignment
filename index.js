const http = require('http');
const app = require('./Routes/book');
const connectToDB = require('./DBConnection/mongoDB');
const PORT = 9004;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    
    console.log(`Server is running on port no ${PORT}`)
});