import axios from "axios"
import { useEffect } from "react";

export const getNews = () =>{
    return async(dispatch) =>{
        return await axios ('http://localhost:3030/api/news')
        .then(res => {
            dispatch({ type:"GET_SELECTED_CATEGORY", payload:res.data });
            return dispatch({type:'GET_ALL_NEWS',payload:res.data})
        })
    }
 }
 export const getCategories= () => {
    return async (dispatch) => {
        return await axios ('http://localhost:3030/api/categories')
        .then(res=>{
      return dispatch({type:'GET_CATEGORIES',payload:res.data})
        })
    }
 }
 export const register = (values) =>{
    return async(dispatch) =>{
       try{
      const {data} = await axios.post('http://localhost:3030/api/add-user',
          {
               email: values.email,
               password: values.password2,
               full_name : values.full_name,
               date_of_birth :values.date_of_birth
             }
       )
    dispatch({type:'REGISTER_USER',data})
    }
    catch(e){
       console.log(e)}
    }}

    export const authorization = (values) => {
        return async (dispatch) => {
            dispatch ({ type: "SHOW LOADER", payload: true})
            return await axios.post('http://localhost:3030/api/login', {
                email: values.email,
                password: values.password
            }).then(data => {
                dispatch ({ type: "SHOW LOADER", payload: false})
                dispatch ({type:"AUTH_USER" , payload:data.data.userId})
                localStorage.setItem('token', data.data.token)
                return dispatch({ type: 'AUTH', payload: data })
            })
            .catch(err => {
                dispatch ({ type: "SHOW LOADER", payload: false})
                alert("Неправильный логин или пароль")
            })
        }
    }

    export const logout = () => {
        return async (dispatch) => {
            localStorage.clear()
            return dispatch({ type: 'AUTH', payload: null })
        }
    }
    export const selectCategory = (id) => {
        return async (dispatch) => {
            try {
                const response = await axios(`http://localhost:3030/api/news-by-category_id/${id}`);
                if (response?.data) {
                    return dispatch({ type:"GET_SELECTED_CATEGORY", payload: response.data });
                }
                return dispatch({ type:"GET_SELECTED_CATEGORY", payload: [] });
            } catch (e) {
                return dispatch({ type:"GET_SELECTED_CATEGORY", payload: [] });
            }
        }
    }
export const getUser =(userId) =>{
    return async (dispatch) =>{
        const {data} = await axios(`http://localhost:3030/api/user/${userId}`)
        localStorage.setItem("user",JSON.stringify(data))
        return dispatch ({type:"GET_USER",payload:data})
    }
 }
 export const getNewsById = (newsId) => {
    
        return async (dispatch) => {
            dispatch({type:"ADD_LIKE",payload:0})
        const res= await axios (`http://localhost:3030/api/news/${newsId}`)
        dispatch({type:"ADD_LIKE",payload:res.data.likes_count})
        return dispatch ({type:"GET_NEWS_BY_ID",payload:res?.data})
    }
 }
 export const addLike = (likeId) =>{
const token = localStorage.getItem('token')
    return async (dispatch) => {
        const {data} = await axios ('http://localhost:3030/api/add-like', {
            method:"POST",
            headers:{
Authorization :`Bearer ${token}`
            },
          data:{
news_id:likeId,

          }

        })
   console.log(data);
        return  
      
    }
 }
 export const forgetPassword =(values) =>{
    let payload ={email:values.email}
    return async() => {
const {data} = await axios.post('http://localhost:3030/api/forget-password',payload)
alert(data.message)

    }
 }

 export const restorePassword = (values) => {
    let payload = {
        email:values.email,
        temporary_password:values.temporaryPassword,
      new_password:values.newPassword
    }
    return async() => {
const {data} = await axios.post('http://localhost:3030/api/setNewPass',payload)
alert(data.message)
    }
 }

 export const getWeather = () => {
    return async (dispatch) => {
        const { data } = await axios('https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=c15601da476242f8e33e17e82e4421e2')
return dispatch({type:"WEATHER",payload:data.temp})
    }
  }

  export const deleteNews = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:3030/api/news/${id}`)
   
    }
  }

  export const addNews = (values) =>{
    const token = localStorage.getItem("token")
    return async(dispatch) =>{
        const {data} = await axios.post('http://localhost:3030/api/add-news',{
            headers:{
                Authorization :`Bearer ${token}`
                            },   
        body:{
                title:values.title,
                content:values.content,
                author:values.author,
                category_id:values.categoryID,
                image:values.image
            }
        })
        console.log(data);
        // return dispatch({type:"ADD_NEWS",data})
    }
  }
//  export const getNewsLikedByUser = () => {
//     const token = JSON.parse(localStorage.getItem('token'))
//     return async() =>{
      
//         const {data} = await axios ("http://localhost:3030/api/news-liked-by-user",{
//             headers:{
//                 Authorization :`Bearer ${token.token}`
//                             }
//         })
//         console.log(data);
//     return 
    
//     }

//  }
 




   // useEffect(() => {
  //   const getData = async () => {
  //     let { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=a0c2b522ad262806f14f4175dbda2e63`)
  //     setTemp(data)
    
  //   }
  //   getData()
  // }, [city])