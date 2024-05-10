import {Dialog, Box, TextField, Button} from "@mui/material";
import { useState, useContext } from "react";
import { authenticateSignUp } from "../../service/api";
import {DataContext} from '../../context/DataProvider';
import { ErrorClose, OnValueChange } from '../../CommonFunctionalities';
import { ButtonWrapper, dialogStyle } from "./CSS-Creds";
import StudentSignup from "./StudentSignup";
import AdminSignup from "./AdminSignup.jsx";
import SupervisorSignup from "./SupervisorSignup.jsx";

const SignupInitials=
{
    Name: '',
    StudentId: '',
    Password:'',
    Department: '',
    Programme: '',
    Email: ''
}



const SignUpDialog = ({ open, SetOpen }) => {
    const [studentOpen, setStudent] = useState(false);
    const [adminOpen, setAdmin] = useState(false);
    const [supervisorOpen, setSupervisor] = useState(false);
    const [errorz, setErrorz]= useState(false);

    const OpenStudent = () => {
        setStudent(true);
    };

    const OpenAdmin = () => {
        setAdmin(true);
    };

    const OpenSupervisor = () => {
        setSupervisor(true);
    };

    return (
        <Box>
            <Dialog
                open={open}
                onClose={() => ErrorClose(SetOpen, setErrorz)}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop={false}
            >
                <ButtonWrapper>
                    <Button variant="contained" onClick={OpenStudent}>
                        Signup as Student
                    </Button>
                </ButtonWrapper>

                <ButtonWrapper>
                    <Button variant="contained" onClick={OpenAdmin}>
                        Signup as Admin
                    </Button>
                </ButtonWrapper>

                <ButtonWrapper>
                    <Button variant="contained" onClick={OpenSupervisor}>
                        Signup as Supervisor
                    </Button>
                </ButtonWrapper>

                {studentOpen && <StudentSignup open={studentOpen} SetOpen={setStudent} />}
                {adminOpen && <AdminSignup open={adminOpen} SetOpen={setAdmin} />}
                {supervisorOpen && <SupervisorSignup open={supervisorOpen} SetOpen={setSupervisor} />}
            </Dialog>
        </Box>
    );
};

export default SignUpDialog;

