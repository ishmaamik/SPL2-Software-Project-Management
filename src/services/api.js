import axios from 'axios';

const URL= 'http://localhost:8000';

export const authenticateSignUp= async(data)=>
{
    try{
       return await axios.post(`${URL}/signup`, data);
    }
    catch(error)
    {
        console.log('Error while authenticating data', error);
    }
}

export const authenticateStudentSignUp= async(data)=>
{
    try{
       return await axios.post(`${URL}/studentsignup`, data);
    }
    catch(error)
    {
        console.log('Error while authenticating data', error);
    }
}

export const authenticateSupervisorSignUp= async(data)=>
{
    try{
       return await axios.post(`${URL}/supervisorsignup`, data);
    }
    catch(error)
    {
        console.log('Error while authenticating data', error);
    }
}

export const authenticateStudentLogin= async(data)=>
{
    try{
       return await axios.post(`${URL}/studentlogin`, data);
    }
    catch(error)
    {
        console.log('Error while logging in', error);
        return error.response;
    }
}

export const authenticateSupervisorLogin= async(data)=>
{
    try{
       return await axios.post(`${URL}/supervisorlogin`, data);
    }
    catch(error)
    {
        console.log('Error while logging in', error);
        return error.response;
    }
}