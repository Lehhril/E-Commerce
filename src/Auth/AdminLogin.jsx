import React from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Icon from '../Images/Icon.png'

const AdminLogin = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

  //   useEffect(() => {
  //     if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null){
  //         navigate("/home");
  //     }
  // }, []);

    const loginAction = (e) => {
      setValidationErrors({});
      e.preventDefault();
      setIsSubmitting(true);
      let payload = {
        email: email,
        password: password,
      };
      axios.post('/api/login', payload)
        .then((response) => {
          setIsSubmitting(false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('type',"admin");
          navigate("/dashboard");
        })
        .catch((e) => {
          setIsSubmitting(false);
          if (e.response.data.errors !== undefined) {
            setValidationErrors(e.response.data.errors);
          }
          if (e.response.data.error !== undefined) {
            setValidationErrors(e.response.data.error);
          }
        });
    };

  return (
    <div className="row justify-content-md-center mt-5">
       <div className="col-12 temp-header text-center">
          <Link to={'/'} className='text-decoration-none text-white'>
          <img src={Icon} alt="" />
          <h1>Nexcent</h1>
          </Link>
        </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title log-title mb-4">Admin Log In</h5>
                            <form onSubmit={(e)=>{loginAction(e)}} className='log-form'>
                                {Object.keys(validationErrors).length != 0 &&
                                     <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                                }
                                
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            Email address
                                    </label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="btn btn-log btn-light btn-block">Login</button>
                                    <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
                                </div>
                                <div className="d-grid gap-2">
                                  <button className='btn btn-warning' onClick={() => navigate('/login')}>
                                    User Login
                                  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}


export default AdminLogin