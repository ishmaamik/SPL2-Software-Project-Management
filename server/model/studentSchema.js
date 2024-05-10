import mongoose from "mongoose";

const studentSchema= new mongoose.Schema({

    Name:
    {
        type: String,
        required: true,        
    }, 

    StudentId:
    {
        type: String,
        required:true,
        unique: true
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

    Programme:
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

const user= mongoose.model('student', studentSchema); //schema name in mongodb will be users with s
export default user;    //the constant user is for further use in the index.js and route.