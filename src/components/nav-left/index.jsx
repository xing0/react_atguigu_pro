import React, {Component} from 'react'
import './navLeft.less'
import logo from '../../image/logo.png'

export default class Nav_left extends Component {

    render() {
        return (
            <div className="left-nav">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>尚硅谷后台</h1>
                </div>

            </div>
        )
    }
}