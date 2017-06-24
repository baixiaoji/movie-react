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
               {this.props.summary}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        summary: state.summary
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators({fetchSummary},dispatch)
}

export default connect(mapStateToProps,mapDispathToProps)(SingleFilm)