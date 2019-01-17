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
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
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
                        <Header/>
                    <div className="content">
                     <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/charts/pie' component={Pie} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                             <Redirect to="/home"/>
                        </Switch>
                    </div>

                    <Foot/>
                </Col>

            </Row>
        )
    }
}