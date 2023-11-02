import axios from "axios"

export const getNews = () =>{
    return async(dispatch) =>{
        return await axios ('http://localhost:3030/api/news')
        .then (res =>{
            console.log(res)
        })
    }
 }