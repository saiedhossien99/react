import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function Signup() {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [Repassword, setRepassword] = useState('');
  const nevigate = useNavigate();

  async function submit(event) {
    
    await axios.post('http://localhost:3006/signup',
      { name: Name, email: Email, address: Address, password: Password })
      .catch((err) => {
        console.log(err)
        return;
      })
      .then(

        nevigate('/')

      );

  }


  return (
    <div className='body'>
      <div>  <img src='.\images\image2.jpeg' alt='' /></div>

      <div className="form-boxSignup">
        <h1 className='header-textsignup'>Sign up</h1>


        <input className="form-signupInput" type="text" name="Name" placeholder="name"
          value={Name} onChange={(e) => { setName(e.target.value) }}
        />

        <input className="form-signupInput" type="email" name="Email" placeholder="email"
          value={Email} onChange={(e) => { setEmail(e.target.value) }}
        />

        <input className="form-signupInput" type="text" name="Address" placeholder="address"
          value={Address} onChange={(e) => { setAddress(e.target.value) }}
        />

        <input className="form-signupInput" type="password" name="pass" placeholder="password"
          value={Password} onChange={(e) => { setPassword(e.target.value) }}
        />

        <input className="form-signupInput" type="password" name="repass" placeholder="reapet password"
          value={Repassword} onChange={(e) => { setRepassword(e.target.value) }}
        />

        <button className='buttonSignup'
          onClick={submit}
        >Submit</button>

        <div className='desc'>
          <p className='text'>have also an account </p>
          <Link className='link' to='/login'>Login</Link>

        </div>
      </div>


    </div>
  );
}
export default Signup;