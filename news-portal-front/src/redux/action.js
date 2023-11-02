import axios from "axios"

export const getNews = () =>{
    return async(dispatch) =>{
        return await axios ('http://localhost:3030/api/news')
        .then(res => {
        
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
 export const getWeather = () =>{
    return async (dispatch) => {
        return await axios ('https://api.gismeteo.net/v2/search/cities/?query=Bishkek',{
            headers :{
          ['X-Gismeteo-Token']: '56b30cb255.3443075'
            }
        })
        .then(res=> console.log(res))
    }
 }


   // useEffect(() => {
  //   const getData = async () => {
  //     let { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=a0c2b522ad262806f14f4175dbda2e63`)
  //     setTemp(data)
    
  //   }
  //   getData()
  // }, [city])