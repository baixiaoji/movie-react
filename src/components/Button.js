import React, { Component } from "react"


class Button extends Component {
    render() {
        let ActiveBorder = (
            <div className="border"></div>
        )
        return (
            <div className="icon-wrapper">
                <span className={this.props.icon}></span>
                {this.props.active ? ActiveBorder : ""}
            </div>
        )
    }
}

export default Button