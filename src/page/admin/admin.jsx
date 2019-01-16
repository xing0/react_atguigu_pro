import React, {Component} from 'react'
import NavLeft from '../../components/nav-left'
import Header from '../../components/header'
import Foot from '../../components/footer'

export default class Admin extends Component {

    render() {
        return (
            <div>
                <div>
                    <NavLeft/>
                </div>
                <div>
                    <Header/>
                    <Foot/>
                </div>
            </div>
        )
    }
}