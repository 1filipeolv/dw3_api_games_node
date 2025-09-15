import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const connectionString = "mongodb+srv://filipelima18_db_user:zU7VTydwmVVAzdVg@cluster0.dnfubvc.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0";
    
    await mongoose.connect(connectionString);
    console.log("Conexão com o MongoDB Atlas estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB Atlas:", error);
    process.exit(1);
  }
};

export default connectToDatabase;