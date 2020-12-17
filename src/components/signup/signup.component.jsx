import React, { useState } from 'react';
import Axios from 'axios';
import {userSignUpSchema} from '../../validation/userValidation';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Button } from 'react-bootstrap';

import './signup.styles.scss';

const SignUp = () => { 

   Axios.defaults.withCredentials = true;

   const [usernameReg, setUsernameReg] = useState('');
   const [emailReg, setEmailReg] = useState('');
   const [passwordReg, setPasswordReg] = useState('');



   const signUp = (data) => {
      console.log(data);
      Axios.post('http://localhost:3001/register', {
            username: data.name,
            email: data.email,
            password: data.password 
         }).then((response) => {
            console.log(response);
         });
         
      } 
   
//       <Form onSubmit={loginUser} >
//       <Form.Group controlId="formBasicEmail">
//          <Form.Label>Display Name</Form.Label>
//          <Form.Control type="text" 
         
//          placeholder="Enter name"
//          onChange={handleChange}
//          value={values.name}
//          />
//          <div className="error-message">
//             {errors.name}
//          </div>
//       </Form.Group>
//       <Form.Group controlId="formBasicEmail">
//          <Form.Label>Email address</Form.Label>
//          <Form.Control type="email" placeholder="Enter email"
//          onChange={handleChange}
//          />
//          <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//          </Form.Text>
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//          <Form.Label>Password</Form.Label>
//          <Form.Control type="password" placeholder="Password"
//          onChange={handleChange}
//          />
//       </Form.Group>
//       <Form.Group controlId="formBasicPassword">
//          <Form.Label>Confirm Password</Form.Label>
//          <Form.Control type="password" placeholder="Confirm Password"
//          onChange={handleChange}
//          />
//       </Form.Group>
//       <h3 style={{color: 'red'}}>{signInError}</h3>
//       <Button variant="primary" type="submit"
      
//       >
//          Submit
//       </Button>
//   </Form>


   return (
    
      <div className="sign-up">
         <Formik
            initialValues={{
               name: '',
               email: '',
               password: '',
               confirmPassword: ''
            }}
            validationSchema={userSignUpSchema}
            onSubmit={signUp}
            >
               {({
                  values,
                  errors,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  handleReset,
                  touched
               }) => {
                  return (
                     <form onSubmit={handleSubmit}>
                        <Form.Group>
                           <Form.Label>Display Name</Form.Label>
                           <Form.Control type="text" 
                           placeholder="Enter name"
                           name="name"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                           />
                           {errors.name && touched.name ? 
                           <div className="error-message">
                              {errors.name}
                           </div> : null 
                            }
                        </Form.Group>
                        
                        <Form.Group>
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" 
                           placeholder="Enter email"
                           name="email"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                           />
                           {errors.email && touched.email ? 
                           <div className="error-message">
                              {errors.email}
                           </div> : null
                          }
                        </Form.Group>

                        <Form.Group>
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" 
                           placeholder="Enter password"
                           name="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                           />
                           { errors.password && touched.password ? 
                           <div className="error-message">
                              {errors.password}
                           </div> : null
                           }
                        </Form.Group>

                        <Form.Group>
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control type="password" 
                           placeholder="Re-enter password"
                           name="confirmPassword"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.confirmPassword}
                           />
                           { errors.confirmPassword && touched.confirmPassword ? 
                           <div className="error-message">
                              {errors.confirmPassword}
                           </div> : null
                           }
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleReset}>
                           Submit
                        </Button>
                     </form>
                  )
               }}
         </Formik>

      </div>
                  
   )
 }

export default SignUp;