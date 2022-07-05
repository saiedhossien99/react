import { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios"

function Login() {
  const [Email, setEmail] = useState('');
  const [Password,setPassword] =useState('');
  const [reload,setReload]=useState(false);
  const naviget=useNavigate();
  
  function submit() {
    axios.post('http://localhost:3006/auth/login',
      { email: Email,password:Password }
    ).then(function (response) {
      localStorage.setItem('token', response.data.token);
      setReload(!reload);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      naviget('/home');
    }
  })



  return (
    <div className=''>
        <img src='.\images\image2.jpeg' alt='' />
      

      <div className="form-box">

        <h1 className='header-text'>LogIn</h1>
        
          <input type="email" name="Email" placeholder="email"
          value={Email} onChange={(e)=>{setEmail(e.target.value)}}
          />

          <input type="password" name="pass" placeholder="password" 
          value={Password} onChange={(e)=>{setPassword(e.target.value)}}
          />

        <button onClick={submit} >Submit</button>

        <div className='desc'>
          <text className='text'>have no account? </text>
          <Link className='link' to='/signup'>signUp</Link>
        </div>

      </div>
    </div>
  );
}
export default Login;