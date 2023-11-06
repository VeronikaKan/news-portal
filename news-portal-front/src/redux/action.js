import axios from "axios"

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
            return await axios.post('http://localhost:3030/api/login', {
                email: values.email,
                password: values.password
            }).then(data => {
                localStorage.setItem('token', data)
                return dispatch({ type: 'AUTH', payload: data })
            })
            .catch(err => {
                console.error(err)
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


   // useEffect(() => {
  //   const getData = async () => {
  //     let { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=a0c2b522ad262806f14f4175dbda2e63`)
  //     setTemp(data)
    
  //   }
  //   getData()
  // }, [city])