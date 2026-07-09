import mongoose from "mongoose"
export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://buddhimadishantha:buddhimadishantha@cluster0.zxrsjbv.mongodb.net/');
    console.log("DB Connected")
}