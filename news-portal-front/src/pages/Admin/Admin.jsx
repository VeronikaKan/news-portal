import React, { useEffect, useState, SelectState } from 'react'
import { Formik, Form } from 'formik';
import "./Admin.css"
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteNews } from '../../redux/action';
import { addNews } from '../../redux/action';
import { getNews } from '../../redux/action';
const Admin = () => {
    const [file, setFile] = useState(null)
    const categories = useSelector(state => state.categories)
    const defaultSelect = categories[0]?.category_id
    const loader = useSelector(state => state.loader)
    const allNews = useSelector(state => state.allNews)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteNews(id))
    }
    useEffect(() => {
        dispatch(getNews())
    }, [])
    const addOneNews = (values) => (dispatch(addNews(values)))
    const handleFile = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }
  

    return (
        <div className='admin'>
            <div className="admin__wrapper">
                <p className="admin__title">Заголовок новости</p>
                <Formik
                    initialValues={{
                        title: '',
                        content: '',
                        author: '',
                        image: '',
                        category_id: defaultSelect
                    }}

                    onSubmit={(values) => {
                        const fd = new FormData();
                        fd.append("addImage", file);
                        fd.append("title", values.title);
                        fd.append("content", values.content);
                        fd.append("author", values.author);
                        fd.append("category_id", values.category_id);
                        addOneNews(fd)
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
                                <select
                                    className='admin__select'
                                    onChange={handleChange}
                                    value={values.category_id}
                                    name='category_id'>
                                    {categories.map((el) => (
                                        <option key={el.category_id} value={el.category_id}>{el.category_name}</option>
                                    ))}
                    
                                </select>

                                <input
                                    type="file"
                                    name="image"
                                    // value={}
                                    // accept='image/*'
                                    className="admin__inp"
                                    onChange={handleFile}
                                />
                                {errors.image && touched.image ? <div>{errors.image}</div> : null}

                                <button
                                    type="submit"
                                    className="admin__btn"
                                >
                                    {loader ? <div className="w-8 h-8 border-4 border-blue-600 rounded-full loader"></div> : 'Опубликовать'}
                                </button>

                            </Form>

                        )
                    }

                </Formik>


            </div>
            <div className='admin__news'>
                {
                    allNews.map((el) => (
                        <div className='admin__oneNews'
                        key={el.news_id}>
                            < p className='admin__info'>
                                {el.title}
                            </p>
                            <div onClick={() => handleDelete(el.news_id)}><DeleteIcon /></div>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default Admin