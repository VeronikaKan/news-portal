import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authorization, getUser } from '../../redux/action';
import { forgetPassword } from '../../redux/action';
import './Login.css'


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('hjh')
    .min(5, 'Cлишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(5, 'Слишком короткий пароль')
    .max(50, "Слишком длинный пароль")
    .matches(/^[aA-zZ0-9.-_--]+$/, "Forbidden symbol"),
});

const Login = () => {
  const userId = useSelector(state => state.userId)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.token);
  const loader = useSelector(state => state.loader)

  useEffect(() => {
    if (token) {
      dispatch(getUser(userId))
      navigate('/')
    }
  }, [token])



  const logIn = (values) => dispatch(authorization(values))

  return (

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

                {errors.email && touched.email ? <div>{errors.email}</div> : null}

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
                >{loader ? <div className="w-8 h-8 border-4 border-blue-600 rounded-full loader"></div> : 'Boйти'}</button>
                <NavLink to='/forget' onClick={() => dispatch(forgetPassword(values))} className='login__forgot'>
                  Забыли пароль?
                </NavLink>
              </Form>
            )
          }

        </Formik>
        <NavLink to='/register' >
          <p className='login__register'>
            Создать аккаунт
          </p>
        </NavLink>

      </div>

    </div>

  )
}

export default Login