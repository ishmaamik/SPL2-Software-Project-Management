import mongoose from "mongoose";

const supervisorSchema= new mongoose.Schema({

    Name:
    {
        type: String,
        required: true,        
    }, 

    Password:
    {
        type: String,
        required: true
    },

    Department:
    {
        type: String,
        required: true
    },

    Email:
    {
        type: String,
        required: true
    }

}
);

const user= mongoose.model('supervisor', supervisorSchema); //schema name in mongodb will be users with s
export default user;    //the constant user is for further use in the index.js and route.