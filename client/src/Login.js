import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        
        email,
        password,
      })

    })
    const data = await response.json()
    if (data.student){
      localStorage.setItem('token',data.student)
      alert('Login successful')
      navigate('/dashboard');
    }else{
      alert('Please check your username and password')
    }
    console.log(data)

  }

  return (
    <div>
      <h1> Student Login</h1>
      <form onSubmit={loginUser}>
       
       
        <label>Student email</label><input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Student email"></input>
      <br/>
       <label>Student password</label> <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"></input>
      <br/>
      <input type="submit" value="Login"/>
      
      </form>
    </div>
  );
}

export default Login;
