import React, {Component} from 'react'
import {Button,Form,Icon,Input} from 'antd'
import './index.less'
import logo from '../../images/logo.png'
import {loginAjax} from '../../api'
import {saveUser} from '../../utils/localStorage'
import momUtils from '../../utils/momoryUtils'
const {Item} = Form


export default class login extends Component {
    state = {
        errorMsg:''
    }

    toAdmin = async (value)=> {
        const result = await loginAjax(value)
        console.log(result);
        if(result.status===0){ //登陆成功 写入内存
            momUtils.user=saveUser(result.data);
            console.log(momUtils.user);
            this.props.history.replace('/')
        }else{ //登陆失败 提示失败信息
            console.log(result.msg);
            this.setState({
                errorMsg:result.msg
            })
        }
    }



    render() {
        const {errorMsg} = this.state
        return (
            <div className="login">
                <div className='login-header'>
                    <img src={logo} alt="atguigu"/>
                    React项目:后台管理系统
                </div>

                <div className="login-content">
                    <div className="login-box">
                        <div className="error-msg-wrap">
                            <div className={errorMsg?'show':''}>{errorMsg}</div>
                        </div>
                        <div className="title">用户登录</div>
                        <LoginForm toAdmin={this.toAdmin}/>
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
    clickLogin = ()=>{  //点击登录事件
        this.props.form.getFieldValue('username')

    }
    //半编程式验证
    checkPwd =(rule,value,callback)=>{
        // console.log('checkPwd',rule,value);
        if(!value){
            callback('密码必须输入鸭!')
        }else if(value.length<4||value.length>20){
            callback('密码少于4位不可以鸭,也不可以太长鸭(超过20)')
        }else {
            callback()
        }
    }
    //全验证
    sendForm = (e)=>{
        e.preventDefault()
        this.props.form.validateFields( (err,value)=>{
            if(!err){
                console.log('成功:提交的信息是:',value)
                // alert('提交成功!')
                this.props.toAdmin(value)
                //重置表单
                this.props.form.resetFields()
            }else{
                console.log('提交验证的错误:',err);
            }
        })
    }

    render(){

     const {getFieldDecorator}  = this.props.form
     return(
        <Form onSubmit={this.sendForm} className='login-form'>
            <Item>
                {getFieldDecorator('username',{
                    initialValue:'admin',
                    rules:[{required:true,message:'用户名必须填写喲~'},
                    {min:4,message:'最少4个字鸭~'}
                    ]
            })(
                <Input  autoComplete='off' prefix={<Icon type="user"/>} placeholder="请输入用户名"  />
                )}
            </Item>
            <Item>
                {getFieldDecorator('password',{
                    initialValue:'admin',
                    rules:[{validator:this.checkPwd}]  //半编程式验证
                })(
                <Input type="password" prefix={<Icon type="lock"/>} className='' placeholder="赶紧输入密码"  />
                )}
            </Item>
            <Form.Item className="">
                {/*<Button type="primary" onClick={this.clickLogin} htmlType="submit" className="login-form-button">登录</Button>*/}
                <Button type="primary"  htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
        </Form>
        )
    }

}
LoginForm = Form.create()(LoginForm)