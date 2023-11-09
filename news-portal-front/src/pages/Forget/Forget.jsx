import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restorePassword } from '../../redux/action';

import './Forget.css'


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('hjh')
    .min(5, 'Cлишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .required('Required'),
  newPassword: Yup.string()
    .required('Required')
    .min(5, 'Слишком короткий пароль')
    .max(50, "Слишком длинный пароль")
    .matches(/^[aA-zZ0-9.-_--]+$/, "Forbidden symbol"),
});

const Forget = () => {
    const loader = useSelector(state => state.loader)
    const dispatch = useDispatch()
    const navigate = useNavigate()
const forget = (values) =>{
    dispatch(restorePassword(values))
navigate('/login')
console.log("fff");
}
  return (
    <div className='forget'>
    <div className="forget__wrapper">
      <p className="forget__title">Восстановление пароля</p>
      <Formik
        initialValues={{
          email: '',
          temporaryPassword:'',
          newPassword: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
forget(values)
        }}
      >

        {
          ({ errors, touched, values, handleChange }) => (

            <Form className='forget__form'>
              <input
                type="email"
                name="email"
                className="forget__inp"
                placeholder="email"
                onChange={handleChange}
              />

              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <input
                type="password"
                name="temporaryPassword"
                className="forget__inp"
                placeholder="Введите код подтверждения"
                onChange={handleChange}

              />
              {errors.temporaryPassword && touched.temporaryPassword ? <div>{errors.temporaryPassword}</div> : null}
              <input
                type="password"
                name="newPassword"
                className="forget__inp"
                placeholder="Введите новый пароль"
                onChange={handleChange}

              />
              {errors.newPassword && touched.newPassword ? <div>{errors.newPassword}</div> : null}

              <button
                type="submit"
                className="forget__btn"
              >{loader ? <div class="w-8 h-8 border-4 border-blue-600 rounded-full loader"></div> : 'Boсстановить пароль'}</button>
             
            </Form>
          )
        }

      </Formik>
    

    </div>

  </div>
  )
}

export default Forget