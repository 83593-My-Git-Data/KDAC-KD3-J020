import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../services/user'
import BG from "../images/background.jpg";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Login() {
  const [emailId, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [isEmailEmpty, setEmailEmpty] = useState(false)
  const [isPasswordEmpty, setPasswordEmpty] = useState(false)

  // get navigation hook
  const navigate = useNavigate()

  const onLogin = async () => {
    
    if (emailId.length == 0) {
      toast.error('Please enter email')
    } else if (password.length == 0) {
      toast.error('Please enter password')
    } else {
      // call login API and check its success
     
      const result = await login(emailId, password, role)
      if (result) {
        const data = result['data']
        console.log(emailId, password,role);

        // persist the token and user name in session storage
        //sessionStorage['name'] = data['name']
        //sessionStorage['token'] = data['token']
        if (role == "ROLE_ADMIN") {
          navigate('/adminDashboard')
        } else if (role == "ROLE_CLIENT") {
          navigate('/clientDashboard')
        }
        else {
          toast.error('invalid user , password or role')
      }} else {
        toast.error('invalid user , password or role')
      }
    }
  }

  return (
    <div>
      <div style={{ 
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
      <Navbar />
      
      <h2 className='page-header'>Login</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setEmailEmpty(true)
                  } else {
                    setEmailEmpty(false)
                  }
                  setEmail(e.target.value)
                }}
                type='email'
                className='form-control'
              />
              {isEmailEmpty && (
                <p style={{ color: 'red' }}>Email is mandatory</p>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => {
                  if (e.target.value.length == 0) {
                    setPasswordEmpty(true)
                  } else {
                    setPasswordEmpty(false)
                  }
                  setPassword(e.target.value)
                }}
                type='password'
                className='form-control'
              />
              {isPasswordEmpty && (
                <p style={{ color: 'red' }}>Password is mandatory</p>
              )}
            </div>

            <div className='mb-3'>
            <label htmlFor=''>Role</label>
            <select className='form-control' onChange={(e) => setRole(e.target.value)}>
            <option>Select Role</option>
            <option value="ROLE_ADMIN">Admin</option>
            <option value="ROLE_CLIENT">Client</option>
            </select>
            </div>

            <div className='mb-3'>
              <div>
                Don't have account ? <Link to='/register'>Register here</Link>
              </div>
              <button onClick={onLogin} className='btn btn-success mt-2'>
                Login
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

export default Login
