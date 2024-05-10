

export const HandleClose=(SetOpen)=>
{
    SetOpen(false);
}

export const ErrorClose=(SetOpen, setErrorz)=>
{
    setErrorz(false);
    SetOpen(false);
}

export const OnValueChange=(e, login, setLogin)=>
{
    setLogin({...login, [e.target.name]: e.target.value})
}

export const OnInputChange=(e, signup, setSignup)=>
{
    //    console.log(e.target.value);
    setSignup({...signup, [e.target.name]: e.target.value});
    console.log(signup);
}