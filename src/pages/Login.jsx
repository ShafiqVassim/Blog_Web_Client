import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) =>{
    setInputs((prev) => ({...prev,[e.target.name]: e.target.value}));
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    await login(inputs)
    navigate("/");
  }catch(err){
    setError(err.response.data);
  }
};


  return (
    <div className='auth'>
    <h1>Login Page</h1>
      <form >
          <input required type="text" placeholder='Username' name='username' onChange={handleChange}/>
          <input required type="text" placeholder='Password' name='password' onChange={handleChange}/>
          <button onClick={handleSubmit} >Login</button>
        {err && <p>{err}</p>}
          <span>
            New to here? <Link to ="/register">Register</Link>
          </span>
      </form>
    </div>
  );
};

export default Login;