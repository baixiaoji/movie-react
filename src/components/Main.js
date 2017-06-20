import React, { Component } from "react"

// import Button from "./Button.js"
import Film from "./Film.js"
import {connect} from "react-redux"


import "../style/Main.css"
class Main extends Component {
    
    
    render() {
       
        const AllFilmCom = this.props.films.map((film,i) =>{
        
            return <Film film={film} key={i} i={i}/>
        })
        return (
            <div className="Main-wrapper">
                <main className="film-grid">
                    {/*<Film />*/}
                    {/*{console.log( this.props.films[0])}*/}
                    {this.props.films.length > 0 ? AllFilmCom: "" }
                </main>
                {/*<div className="botton-wrapper" >
                    <Button icon="iconfont icon-Movie" active={true} />                   
                    <Button icon="iconfont icon-tickets" active={false} /> 
                    <Button icon="iconfont icon-search" active={false}/>                   
                    <Button icon="iconfont icon-user" active={false} />                   
                </div>*/}
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        films:state.film
    }
}

export default connect(mapStateToProps)(Main)