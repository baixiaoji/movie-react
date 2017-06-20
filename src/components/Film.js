import React, { Component } from "react"

import { Link } from "react-router"

import "../style/Film.css"
import Button from "./Button.js"

class Film extends Component {
    render() {
        const TagCom = this.props.film.genres.map((text,i)=>{
            return (
              <span className="genres-tag" key={i}>
                    {text}
                </span>  
            )
        })
        return (
            <div className="film-wrapper">
                <Link to={`film/${this.props.film.id}`}>
                    <div className="film-img">
                        <img src={this.props.film.images.large} alt="" />
                        <span className="rating image is-32x32">{this.props.film.rating.average}</span>
                    </div>
                </Link>

                <div className="film-info">
                    <Link to={`film/${this.props.film.id}`}>
                        <div className="info-title">{this.props.film.title}</div>
                        <div className="info-genres">
                            {this.props.film.genres.length>0? TagCom:""}
                        </div>
                        <div className="info-summary">
                            "新版《木乃伊》讲述了一个全新故事，木乃伊公主阿玛内特穿梭到现代伦敦，企图寻回她曾被夺去的一切。\n本片由动作巨星汤姆·克鲁斯主演。凭借《王牌特工》中的 “刀锋女”一角大热的新锐女星索菲亚·宝特拉饰演有巨大毁灭力量的木乃伊公主阿玛内特，而好莱坞著名硬汉男星罗素·克劳 也有精彩表现。\n导演艾里克斯·库兹曼为好莱坞资深制片人，作品包括《惊天魔盗团》、 《星际迷航：暗黑无界》、《碟中谍3》等。\n据悉，影片将于近日发布全球首支官方预告片，届时将有更多精彩场景呈献，并将揭晓更多神秘剧情。该片北美预计2017年6月9 日上映。"
                        </div>
                    </Link>

                    <div className="collect">
                        <Button icon="iconfont icon-start" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Film;