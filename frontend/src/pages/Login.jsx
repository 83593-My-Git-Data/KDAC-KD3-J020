import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
export function Login() {

    const navigate = useNavigate(); // Initialize useHistory
    const [user, setUser] = useState({ emailId: "", password: "" });
    const [message, setMessage] = useState("");
    const url = "http://localhost:8080/user/login";

    const onTextChange = (args) => {
        var usr1 = { ...user };
        usr1[args.target.name] = args.target.value;
        setUser(usr1);
    }

    const showMessage = (msgText) => {
        setMessage(msgText);
        window.setTimeout(() => {
            setMessage("");
        }, 3000);
    }

    const handleLogin = () => {
        //debugger;
        axios.post("http://localhost:8080/user/login", user).then((result) => {
            if (result.data != null) {
                showMessage("Login successfully!");
                localStorage.setItem("userId", result.data.id);
        navigate.push("/home"); 
            }
        })
            .catch(error => {
                console.error("Axios request failed", error);
            });
    }

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
                    name="emailId"
                    placeholder='abcd@gmail.com'
                    value={user.emailId} 
                    onChange={onTextChange}
                    />
                
                
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                    type='password'
                    name="password"
                    placeholder='********'
                   // className='form-control'
                    value={user.password} 
                    onChange={onTextChange}
                />
            </div>
            <div className='mb-3'>
                <div>Don't have an account ? <Link to='/register'>Register Here</Link></div>
                <button className="btn btn-primary mt-2" type="submit" onClick={handleLogin}>Login</button>
            </div>
        </div>

            </div>
            <div className="col"></div>                      
        </div>

       
    </>
    )
}

export default Login