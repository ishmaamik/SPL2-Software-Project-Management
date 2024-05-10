import mongoose from "mongoose";
export const Connection= async (username, password) =>
{
    const URL= `mongodb+srv://${username}:${password}@spl.p2muaje.mongodb.net/?retryWrites=true&w=majority&appName=SPL`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true}) //await comes with async()  
        console.log("Database connected successfully");
    }
    catch(error){
        console.log('Error while connecting with database', error.message);
    }
}

export default Connection;