import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleLogin = (e) =>{
        e.preventDefault();

        if(username === 'user' && password=== 'password'){
            navigate('/');

        }else{
            setError('Invalid username and password')
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required/><br/><br/>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                    {error && <p style={{color: 'red'}}> {error}</p>}
                    <br/><br/>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;