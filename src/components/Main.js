import React, { Component } from "react"

import Button from "./Button.js"
import Film from "./Film.js"



import "../style/Main.css"
class Main extends Component {
    render() {
        return (
            <div className="Main-wrapper">
                <main className="film-grid">
                    <Film />
                    <Film />
                    <Film />
                </main>
                <div className="botton-wrapper" >
                    <Button icon="iconfont icon-Movie" active={true} />                   
                    <Button icon="iconfont icon-tickets" active={false} /> 
                    <Button icon="iconfont icon-search" active={false}/>                   
                    <Button icon="iconfont icon-user" active={false} />                   
                </div>
            </div>

        )
    }
}

export default Main