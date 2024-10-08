const moongoose = require('mongoose')
require('dotenv').config()

password = encodeURIComponent(process.env.DB_PASSWORD)
user = process.env.DB_USER

const connectionString = `mongodb+srv://${user}:${password}@nodejsexpressproject.3wc7g.mongodb.net/BLOGS_API?retryWrites=true&w=majority&appName=NodejsExpressProject`


const connectDB =()=>{
moongoose.connect(connectionString)
console.log("Connected to the Database");
}

module.exports = connectDB