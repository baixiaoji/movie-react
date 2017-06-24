// import axios from "axios"
import jsonp from "jsonp"
import store from "../store"
const ROOT_URL = `https://api.douban.com`;

export const FETCH_FILM = "FETCH_FILM";


export function fetchFilm() {
    const url = `${ROOT_URL}/v2/movie/in_theaters`
    // console.log(url)
    let request = new Promise((resolve, reject) => {
        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message)
            } else {
               resolve(data.subjects) 
            }
        })
    })
    // jsonp(url, null, function (err, data) {
    //     if (err) {
    //         console.error(err.message)
    //     } else {
    //         request = data.subjects
    //         store.dispatch({
    //             type:FETCH_FILM,
    //             payload:request
    //         })
    //     }
    // })

    // return {
    //     type:FETCH_FILM,
    //     payload:request
    // }
    return (dispatch) => {
       request.then(function(films){
           return dispatch({
               type: FETCH_FILM,
               payload: films,
               caption: "film"
           })
       })
    }
}

export const FETCH_SUMMARY = "FETCH_SUMMARY";

export function fetchSummary(id){
    const url = `${ROOT_URL}/v2/movie/subject/${id}`

    let request = new Promise((resolve,reject)=> {
        jsonp(url,null,function(err,data){
            if (err) {
                console.error(err.message)
            } else {
               resolve(data.summary) 
            }
        })
    })

    return (dispatch) =>{
        request.then(function(summary){
            return dispatch({
                type: FETCH_SUMMARY,
                payload: summary,
                caption: "summary"
            })
        })
    }
}