import React, {Component} from 'react'
import {Button,Form,Icon,Input} from 'antd'
import './index.less'
import logo from '../../images/logo.png'

const {Item} = Form


export default class login extends Component {

    render() {
        return (
            <div className="login">
                <div className='login-header'>
                    <img src={logo} alt="atguigu"/>
                    React项目:后台管理系统
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
/*
* 包含<Form>被包装组件
* */
class LoginForm extends Component {
    render(){
        return(
        <Form  className='login-form'>
            <Item>
                <Input className='' prefix={<Icon type="user"/>} placeholder="请输入用户名"  />
            </Item>
            <Item>
                <Input type="password" prefix={<Icon type="lock"/>} className='' placeholder="赶紧输入密码"  />
            </Item>
            <Form.Item className="">
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
        </Form>
        )
    }

}
LoginForm = Form.create()(LoginForm)