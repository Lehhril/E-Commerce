import React from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Header from '../Components/Header'


const Login = () => {
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
      axios.post('https://mock-api.binaryboxtuts.com/api/login', payload)
        .then((response) => {
          setIsSubmitting(false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('type',"user");
          
          localStorage.setItem("isLogged",true);
          navigate("/");
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
    <>
    <Header/>
    <section className='reg-page'>
    <div className="row justify-content-md-center pt-5">
       <div className="col-12 temp-header text-center">
       
        </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title reg-head mb-4">Sign-In</h5>
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
                                        className="reg-btn">Login</button>
                                    <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </>
  )
}

export default Login