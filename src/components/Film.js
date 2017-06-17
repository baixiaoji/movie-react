import React, {Component} from "react"

import "../style/Film.css"

class Film extends Component{
    render(){
        return(
            <div className="film-wrapper">
               <div className="film-img">
                   <img src="https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2459198108.webp" alt=""/>
                   <span className="rating image is-32x32">8.7</span>
               </div>
            </div>
        )
    }
}
export default Film;