import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
export function Register() {

    const [clientName, setClientName] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamId, setTeamId] = useState('')
    const [mobileNo, setmobileNo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const onRegister = async() => {
        if (clientName.length == 0) {
            toast.warning('enter client name')
        }else if (teamName.length == 0) {
            toast.warning('enter team name')
        }
        else if (teamId.length == 0) {
            toast.warning('team ID can not be empty')
        }else if (mobileNo.length == 0) {
            toast.warning('enter mobile number')
        }else if (email.length == 0) {
            toast.warning('enter email')
        }else if (password.length == 0) {
            toast.warning('enter password')
        }else if (confirmPassword.length == 0) {
            toast.warning('enter confirm password')
        }else if (password != confirmPassword) {
            toast.warning('password does not match')
        }else{
            
        }
    }

    return (
        <>

        <h1 className='title'>Register</h1>

        <div className="row">
            <div className="col"></div>
            <div className="col">
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
                <label htmlFor=''>Team ID</label>
                <input
                    onChange={(e) => setTeamId(e.target.value)}
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
                    placeholder='abc@gmail.com'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='********'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    type='password'
                    placeholder='********'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <div>Already have an account ? <Link to='/login'>Login Here</Link></div>
                <button onClick={onRegister} className="btn btn-primary mt-2">Register</button>
            </div>
        </div>

            </div>
            <div className="col"></div>                      
        </div>

       
    </>
    )
}

export default Register