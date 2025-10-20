const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.ccxd4yn.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=NodeJS`);
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDatabase; 