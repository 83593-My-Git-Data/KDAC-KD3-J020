import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {  registerUser } from '../services/user'
import BG from "../images/background.jpg";
import Navbar from '../components/navbar'
import Footer from '../components/footer'


function Register() {

  const [name, setName] = useState('')
  const [phoneNo, setmobileNo] = useState('')
  const [emailId, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  
  const role = "ROLE_CLIENT"

  // get the navigation hook
  const navigate = useNavigate()

  const onRegister = async () => {
    if (name.length == 0) {
      toast.error('please enter first name')
    }else if (teamName.length == 0) {
      toast.warning('enter team name number')
    }
     else if (phoneNo.length == 0) {
      toast.warning('enter mobile number')
    } else if (emailId.length == 0) {
      toast.error('please enter email')
    } else if (password.length == 0) {
      toast.error('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.error('please confirm the password')
    } else if (password != confirmPassword) {
      toast.error('password does not match')
    } else {
      
      // call post /admin/register api
      const result = await registerUser(name,phoneNo, emailId, password,confirmPassword,role ,teamName)
      console.log(name,phoneNo, emailId, password,confirmPassword,role, teamName);
      if (result) {
        toast.success('Successfully registered a new user')
        navigate('/login')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <div>
      
      <Navbar />
      
      <div style={{ 
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
      <h2 className='page-header'>Register</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Client Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
             <div className='mb-3'>
              <label htmlFor=''>Team Name</label>
              <input
                onChange={(e) => setTeamName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div> 
            <div className='mb-3'>
                <label htmlFor=''>Mobile Number</label>
                <input
                    onChange={(e) => setmobileNo(e.target.value)}
                    type='number'
                    placeholder='xxxxxxxxxx'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <input
              type='hidden'
              value={role}
            />
            <div className='mb-3'>
              <div>
                Already have an account ? <Link to='/login'>Login here</Link>
              </div>
              <button onClick={onRegister} className='btn btn-success mt-2'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
