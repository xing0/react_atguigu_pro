import React, {Component} from 'react'
import NavLeft from '../../components/nav-left'
import Header from '../../components/header'
import Foot from '../../components/footer'
import Momory from '../../utils/MomoryUtils'
import {Redirect,Switch,Route} from 'react-router-dom'
import  {Row,Col} from 'antd'
import './admin.less'
/*引入页面*/
import Home from '../home/home'
import Category from '../category/category'
import Charts from '../charts/charts'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'

export default class Admin extends Component {

    render() {
        if(!Momory.user){
            return <Redirect to="/login"/>
        }

        return (
            <Row className="container">
                <Col span={4}>
                    <div>
                        <NavLeft/>
                    </div>
                </Col>

                <Col span={20} className="main">
                    <div>
                        <Header/>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/charts' component={Charts} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                             <Redirect to="/home"/>
                        </Switch>
                        <Foot/>
                    </div>
                </Col>
            </Row>
        )
    }
}