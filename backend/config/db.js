// * Mongoose is a MongoDB object modeling tool
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // * The mongoose.connect() returns a Promise which resolves to a "Connection" object
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // * This .catch() is to catch the errors when the "Connection" fails
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
