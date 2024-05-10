import users from "../model/userSchema.js";
import student from "../model/studentSchema.js";
import supervisor from "../model/supervisorSchema.js";
import admin from "../model/adminSchema.js";

export const userSignUp = async (request, response) => {
    try {
        const user = request.body;
        const newUser = new users(user);
        await newUser.save();
        console.log('came till here 1');

      
        response.status(200).json({ message: user });
    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message: error.message });
    }
};

export const adminSignUp = async (request, response) => {
    try {
        const user = request.body;
        const newUser = new admin(user);
        await newUser.save();
        console.log('came till here 1');

        
        response.status(200).json({ message: user });
    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message: error.message });
    }
};


export const studentSignUp = async (request, response) => {
    try {
        const user = request.body;
        const newUser = new student(user);
        await newUser.save();
        console.log('came till here 1');

       
        response.status(200).json({ message: user });
    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message: error.message });
    }
};

export const supervisorSignUp = async (request, response) => {
    try {
        const user = request.body;
        const newUser = new supervisor(user);
        await newUser.save();
        console.log('came till here 1');

        
        response.status(200).json({ message: user });
    } catch (error) {
       
        console.log(error);
        response.status(500).json({ message: error.message });
    }
};


export const studentLogin = async (request, response) => {
    try {
        const studentId = request.body.ID;
        const password= request.body.Password;

        let userApprove= await student.findOne({StudentId:studentId, Password:password});

        if(userApprove)
        {
           return response.status(200).json({data:userApprove});
        }
        else
        {
            return response.status(401).json(`Invalid login`);
        }
        
    } catch (error) {
        
        console.log(error);
        response.status(500).json( 'Error', error.message );
        
    }
};

export const supervisorLogin = async (request, response) => {
    try {
        const supervisorName = request.body.Name;
        const password= request.body.Password;

        let userApprove= await supervisor.findOne({Name:Name, Password:password});

        if(userApprove)
        {
           return response.status(200).json({data:userApprove});
        }
        else
        {
            return response.status(401).json(`Invalid login`);
        }
        
    } catch (error) {
        
        console.log(error);
        response.status(500).json( 'Error', error.message );
        
    }
};