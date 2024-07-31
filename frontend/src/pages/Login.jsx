import { Link } from "react-router-dom";

export function Login() {
    return (
    <>

        <h1 className='title'>Login</h1>

        <div className="row">
            <div className="col"></div>
            <div className="col">
            <div className='form'>
            <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input
                    type='email'
                    placeholder='abcd@gmail.com'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                    type='password'
                    placeholder='********'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <div>Don't have an account ? <Link to='/register'>Register Here</Link></div>
                <button className="btn btn-primary mt-2">Login</button>
            </div>
        </div>

            </div>
            <div className="col"></div>                      
        </div>

       
    </>
    )
}

export default Login