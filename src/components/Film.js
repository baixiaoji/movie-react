import React, {Component} from "react"

import "../style/Film.css"
import Button from "./Button.js"

class Film extends Component{
    render(){
        return(
            <div className="film-wrapper">
               <div className="film-img">
                   <img src="https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2459198108.webp" alt=""/>
                   <span className="rating image is-32x32">8.7</span>
               </div>
               <div className="film-info">
                   <div className="info-title">The Mummy 新木乃伊</div>
                   <div className="info-genres">
                       <span className="genres-tag">
                         动作 
                       </span>
                       <span className="genres-tag">
                        奇幻
                       </span>
                       <span className="genres-tag">
                        冒险
                       </span>
                   </div>
                   <div className="info-summary">
                       "新版《木乃伊》讲述了一个全新故事，木乃伊公主阿玛内特穿梭到现代伦敦，企图寻回她曾被夺去的一切。\n本片由动作巨星汤姆·克鲁斯主演。凭借《王牌特工》中的 “刀锋女”一角大热的新锐女星索菲亚·宝特拉饰演有巨大毁灭力量的木乃伊公主阿玛内特，而好莱坞著名硬汉男星罗素·克劳 也有精彩表现。\n导演艾里克斯·库兹曼为好莱坞资深制片人，作品包括《惊天魔盗团》、 《星际迷航：暗黑无界》、《碟中谍3》等。\n据悉，影片将于近日发布全球首支官方预告片，届时将有更多精彩场景呈献，并将揭晓更多神秘剧情。该片北美预计2017年6月9 日上映。"
                   </div>
                   <div className="collect">
                       <Button icon="iconfont icon-start" />
                   </div>
               </div>
            </div>
        )
    }
}
export default Film;