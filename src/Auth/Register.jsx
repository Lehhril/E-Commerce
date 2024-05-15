import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from "../assets/Images/profile.png"

// import Mobile from '../Images/rafiki.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';


const Register = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);



  useEffect(() => {
    if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {

      navigate("/");
    }
  }, []);
  let errors = false;
  const registerAction = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password.length < 8) {
      errors = true;
    }
    else { }
    let payload = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword
    };
    axios.post('https://mock-api.binaryboxtuts.com/api/register', payload)
      .then((response) => {
        setIsSubmitting(false);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isLogged',true);
        console.log(response.data);
        navigate("/");
        alert("Successfully Singed Up");
      })
      .catch((e) => {
        setIsSubmitting(false)
        if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
        }
      });
  }


  return (
    <>
    <Header/>
    <section className='reg-page'>
    <div className="row  p-5">
      <div className='col-lg-4 m-auto reg-box'>
        <div className=" my-3 row justify-content-center">
          
          <div className="row">
            <div className="col-12 text-start p-2">
              <h2 className='reg-head'>Registeration</h2>
            </div>
            <div className='reg-body row justify-content-center'>
              
              <div className="col-12">
                <div className="card reg-card">
                  <div className="card-body">
                    <form onSubmit={(e) => registerAction(e)} className='form-reg'>
                      {/* username */}
                      <div className='col-lg-12'>
                        <label htmlFor="name" className="form-label">Your name</label>
                        <input type="text"
                          className="form-control"
                          id='name'
                          name='name'
                          value={name}
                          onChange={(e) => { setName(e.target.value) }} />
                        {validationErrors.name != undefined &&
                          <div className="flex flex-col">
                            <small className="text-danger">
                              {validationErrors.name}
                            </small >
                          </div>
                        }
                      </div>
                      {/* email */}
                      <div className=' col-lg-12'>
                        <label htmlFor="email" className="form-label">Your email</label>
                        <input type="email"
                          className="form-control"
                          id='email'
                          name='email'
                          value={email}
                          onChange={(e) => { setEmail(e.target.value) }} />
                        {validationErrors.name != undefined &&
                          <div className="flex flex-col">
                            <small className="text-danger">
                              {validationErrors.email}
                            </small >
                          </div>
                        }
                      </div>
                      {/* password */}
                      <div className=' col-lg-12'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"
                          className="form-control"
                          id='password'
                          name='password'
                          value={password}
                          onChange={(e) => { setPassword(e.target.value) }} />
                        {validationErrors.name != undefined &&
                          <div className="flex flex-col">
                            <small className="text-danger">
                              {validationErrors.password}
                            </small >
                          </div>
                        }
                        {
                          errors && <div>Hello</div>
                        }
                      </div>
                      {/* confirm password */}
                      <div className=' col-lg-12'>
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password"
                          className="form-control"
                          id='confirmPassword'
                          name='confirmPassword'
                          value={confirmPassword}
                          onChange={(e) => { setConfirmPassword(e.target.value) }} />
                      </div>
                      <div className=' col-lg-12 mt-3 d-flex flex-column justify-content-center align-items-center'>
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="reg-btn mb-2">Register Now
                        </button>
                        <p
                          className="">Already have an account <Link to="/login">Login here</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Register