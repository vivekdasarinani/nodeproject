const mongoose = require("mongoose");

// mongoose.connect()
const DB_URL = 'mongodb+srv://myusername:nani12345678@cluster0.zyyx3km.mongodb.net/doc24x7?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.set('strictQuery', false);
       // await mongoose.set('strictQuery', true);
        await mongoose.connect(DB_URL);
        console.log('Database connected')


    } catch (error) {
        console.log('Error while connecting ' + error.message);
    }

    useNewUrlparsers = true,
    useUnifiedTopology = true,
    useCreateIndex = true
};

module.exports = connectDB; 
