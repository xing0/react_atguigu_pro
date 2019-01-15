import React, {Component} from 'react'
import {Button,Form,Input,Icon} from 'antd'
import './index.less'
import logo from '../../images/logo.png'
export default class Login  extends Component {

    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <span>第二次:React模块化/组件化/工程化/项目:后台管理系统</span>
                </div>

                <div className="login-content">
                    <div className="login-box">
                        <div className="title">用户登录</div>
                        <LoginForm/>
                    </div>
                </div>

            </div>
        )
    }
}

class LoginForm extends Component {

    render(){
        return(
            <Form className="login-form">
                <Form.Item>
                    <Input placeholder="请输入用户名"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="请输入密码"/>
                </Form.Item>
                <Form.Item>
                   <Button className="login-form-button" type="primary">用户登录</Button>
                </Form.Item>
            </Form>
        )
    }


}