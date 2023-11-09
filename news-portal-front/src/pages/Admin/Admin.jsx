import React from 'react'
import { Formik, Form } from 'formik';
import "./Admin.css"
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteNews } from '../../redux/action';
import { addNews } from '../../redux/action';
const Admin = () => {
    const categories = useSelector(state => state.categories)
    const loader = useSelector(state => state.loader)
    const allNews = useSelector(state => state.allNews)
    console.log(categories);
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch(deleteNews(id))
    }
    const addOneNews = (values) => (dispatch(addNews(values)))

    return (
        <div className='admin'>
            <div className="admin__wrapper">
                <p className="admin__title">Заголовок новости</p>
                <Formik
                    initialValues={{
                        title: '',
                        content: '',
                        author: '',
                        image: ''
                    }}

                    onSubmit={values => {
                        addOneNews(values)
                    }}
                >

                    {
                        ({ errors, touched, values, handleChange }) => (

                            <Form className='admin__form'>
                                <input
                                    type="text"
                                    name="title"
                                    className="admin__inp"
                                    placeholder="Заголовок"
                                    onChange={handleChange}
                                />

                                {errors.title && touched.title ? <div>{errors.title}</div> : null}

                                <textarea
                                    type="text"
                                    name="content"
                                    className="admin__inp"
                                    placeholder="Введите текст"
                                    onChange={handleChange}

                                />
                                {errors.content && touched.content ? <div>{errors.content}</div> : null}
                                <input
                                    type="text"
                                    name="author"
                                    className="admin__inp"
                                    placeholder="Автор публикации"
                                    onChange={handleChange}

                                />
                                {errors.author && touched.author ? <div>{errors.author}</div> : null}
                                <select className='admin__select'>
                                    {categories.map((el) => (
                                        <option onClick={() => handleClick(el.category_id)}>{el.category_name}</option>
                                    ))}
                                </select>
                                <input 
                                    type="file"
                                    name="image"
                                    className="admin__inp"
                                    placeholder="+"
                                    onChange={(e)=>handleChange(console.log(e.target))}

                                />
                          
                                {errors.image && touched.image ? <div>{errors.image}</div> : null}

                                <button
                                    type="submit"
                                    className="admin__btn"
                                >
                                    {loader ? <div class="w-8 h-8 border-4 border-blue-600 rounded-full loader"></div> : 'Опубликовать'}
                                </button>

                            </Form>
                                  
                        )
                    }

                </Formik>


            </div>
            <div className='admin__news'>
                {
                    allNews.map((el) => (
                        < p className='admin__oneNews'>
                            {el.title}<div onClick={() => handleClick(el.news_id)}><DeleteIcon /></div>
                        </p>
                    ))
                }
            </div>

        </div>

    )
}

export default Admin