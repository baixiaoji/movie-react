// import axios from "axios"
import jsonp from "jsonp"
import store from "../store"
const ROOT_URL = `https://api.douban.com`;

export const FETCH_FILM = "FETCH_FILM";

export function fetchFilm(){
    const url = `${ROOT_URL}/v2/movie/in_theaters`
    // console.log(url)
    // let request;
    // jsonp(url,null,function(err,data){
    //     if(err){
    //         console.error(err.message)
    //     }else{
    //         request =  data.subjects
    //         store.dispatch({
    //             type:FETCH_FILM,
    //             payload:request
    //         })
    //     }
    // })

    return {
        type:FETCH_FILM,
        payload:new Promise((resolve,reject) => {
            jsonp(url,null,function(err,data){
                    if(err){
                        console.error(err.message)
                    }else{
                        resolve( data.subjects )
                    }
                })
        })
    }
}