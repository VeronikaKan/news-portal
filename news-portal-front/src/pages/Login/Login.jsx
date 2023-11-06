import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authorization }from '../../redux/action';
import './Login.css'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('hjh')
  .min(5, 'Cлишком короткое имя')
  .max(50, 'Слишком длинное имя')
  .required('Required'),
  password: Yup.string()
  .required('Required')
  .min(5, 'Слишком короткий пароль')
  .max(15, "Слишком длинный пароль")
  .matches(/^[aA-zZ0-9.-_--]+$/, "Forbidden symbol"),
 });

 const Login = () => {
  const dispatch = useDispatch()
   const navigate = useNavigate()
   const token = useSelector(state => state.token);

   useEffect(() => {
      if (token) navigate('/')
   }, [token])


  
  const logIn = (values) => dispatch(authorization(values))

  return(

    <div className='login'>
    <div className="login__wrapper">
      <p className="login__title">Авторизация</p>
      <Formik
        initialValues={{
        email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
logIn(values)
        }}
       >

        {
          ({ errors, touched, values, handleChange }) => (

            <Form className='login__form'>
              <input
                type="email"
                name="email"
                className="login__inp"
                placeholder="email"
                onChange={handleChange} 
              />

              {errors.email && touched.email? <div>{errors.email}</div> : null}

              <input
                type="password"
                name="password"
                className="login__inp"
                placeholder="Password"
                onChange={handleChange}
        
              />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}

              <button
                type="submit"
                className="login__btn"
              >Войти</button>
              

            </Form>
          )
        }
      </Formik>
      <NavLink  to = '/register' >
        <p className='login__register'>
Создать аккаунт
</p>
      </NavLink>
      <p className='login__forgot'>
Забыли пароль?
  </p>
    </div>
  
  </div>

 )}
  
 export default Login