import { useState } from "react";
import React from 'react';
import { TextField, FormControl } from "@mui/material";

export default function Form() {
    

    const formObj = {
        username: "",
        mobile: "",
        email: "",
        password: ""
    }
    
    const [values, setValues] = useState(formObj);
    const [errors, setErrors] = useState({});
    
    const changeHandler = (e) =>{
      const { name, value } = e.target;

    //   console.log(name, value)

      setValues({
          ...values,
          [name] : value
      });

      
    }

    const loginHandler = () =>{

        if ( validateForm() ){
            // console.log(values)
            alert('Your Form is Submitted');
            setValues(formObj);
        }
        
    }
    const validateForm = () => {
        const newErrors = {};
        
        const { email, password, username, mobile } = values;

        
        if (username === "") newErrors.username = "**Please Enter Username";
        if (mobile.length != 10) newErrors.mobile = "**Please Enter 10 digit Mobile Number";
        if (email === "") newErrors.email = "**Please Enter Email";
        if (password.length <= 8) newErrors.password = "**Please Enter Password at least eight character"
        
        

        setErrors(newErrors);
        console.log(newErrors)

        return Object.keys(newErrors).length === 0;

    }

    

  return (
    <div className='container'>
        <div className="formInner">
        <h1>Login Form</h1>
        <div className='FormBox'>
            <label>Username:</label>
                <FormControl>
                    <TextField  
                        type="text" 
                        autoComplete="off" 
                        name='username'
                        value={values.username}
                        onChange={changeHandler}
                        error={errors.email !== undefined}
                        helperText={errors?.username}
                    />
                </FormControl>
        </div>

        <div className='FormBox'>
            <label>Mobile No:</label>
                <FormControl>
                    <TextField  
                        type="number" 
                        autoComplete="off" 
                        name="mobile" 
                        value={values.mobile}
                        onChange={changeHandler}
                        error={errors.mobile !== undefined}
                        helperText={errors?.mobile}
        
                    />
                </FormControl>
        </div>

        <div className='FormBox'>
            <label>Email:</label>
                <FormControl>
                    <TextField  
                        type="email" 
                        autoComplete="on" 
                        name="email" 
                        value={values.email}
                        onChange={changeHandler}
                        error={errors.email !== undefined}
                        helperText={errors?.email}
                        
                    />
                </FormControl>
        </div>

        <div className='FormBox'>
            <label>Password:</label>
                <FormControl>
                    <TextField  
                        type="password" 
                        autoComplete="off" 
                        name="password" 
                        value={values.password}
                        onChange={changeHandler}
                        error={errors.password !== undefined}
                        helperText={errors?.password}
                    />
                </FormControl>
        </div>
        <div className='FormBox'>
            <button type='submit' variant="outlined" onClick={loginHandler}>Submit</button>
        </div>
        </div>
    </div>
  )
}
