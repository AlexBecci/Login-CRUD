import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://beccialex2002:Salamenopodes123@cluster0.zlsk9dg.mongodb.net/',
            {
                dbName:"Prueba"
            });
        console.log("DB is connected")

    } catch (error) {
        console.error(error)
    }
}