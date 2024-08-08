import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../services/admin'

function Register() {
  const [clientName, setClientName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [mobileNo, setmobileNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get the navigation hook
  const navigate = useNavigate()

  const onRegister = async () => {
    if (clientName.length == 0) {
      toast.error('please enter first name')
    } else if (teamName.length == 0) {
      toast.error('please enter last name')
    } else if (mobileNo.length == 0) {
      toast.warning('enter mobile number')
    } else if (email.length == 0) {
      toast.error('please enter email')
    } else if (password.length == 0) {
      toast.error('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.error('please confirm the password')
    } else if (password != confirmPassword) {
      toast.error('password does not match')
    } else {
      // call post /admin/register api
      const result = await register(clientName, teamName, email, password)
      if (result['status'] == 'success') {
        toast.success('Successfully registered a new user')
        navigate('/login')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <div>
      <h2 className='page-header'>Register</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Client Name</label>
              <input
                onChange={(e) => setClientName(e.target.value)}
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
  )
}

export default Register
