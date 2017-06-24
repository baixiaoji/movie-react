import React, { Component } from "react"


import {bindActionCreators} from "redux"
import {connect} from "react-redux"

import {fetchSummary} from "../actions/fetchFilm"

class SingleFilm extends Component {
    componentDidMount(){
        const {id} = this.props.params
        this.props.fetchSummary(id)
    }

    render() {
        return (
            <div className="Main-wrapper">
               
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        films:state.film
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators({fetchSummary},dispatch)
}

export default connect(mapStateToProps,mapDispathToProps)(SingleFilm)