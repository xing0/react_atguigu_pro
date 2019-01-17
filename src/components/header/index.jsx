import React, {Component} from 'react'
import './header.less'
import {Row,Col,message,Modal} from 'antd'
import {getTime} from '../../utils/createTime'
import {getWeather} from '../../api/index'
import {removeUser}  from '../../utils/localStorage'
import Momory from '../../utils/MomoryUtils'
import {withRouter} from 'react-router-dom'
 class Header extends Component {
    //设置状态 (时间,天气图,天气字)
    state = {
        time:getTime(),
        weatherImg:'http://api.map.baidu.com/images/weather/day/qing.png',
        weather:'???'
    }

    // 定时设置时间
    upTime = ()=>{
        console.log('登陆后时间打印!')
        const time = getTime()
        this.setState({
            time
        })
    }
    //设置启动钩子(调用两个方法)
   componentWillMount (){
        this.setinitvalID = setInterval(this.upTime,500)
        // this.setWeather('北京')  //防止一直调用接口浪费次数,注销掉这个
    }
//设置文档写在后 取消定时器
    componentWillUnmount(){
        clearInterval(this.setinitvalID)
    }

    //设置钩子要调用的方法(天气函数)
     setWeather = async (city)=>{
       const result = await getWeather(city)
         if(result.status){
             message.error(result.message)
        }else{
          const todayWeather = result[0].weather_data[0]
             console.log(todayWeather);
             this.setState({
                weatherImg:todayWeather.nightPictureUrl,
                weather:todayWeather.weather
            })
        }
    }
    //点击退出
    exit = ()=>{
        const confirm = Modal.confirm;
        confirm({
            title: '确定要退出吗?',
            content: '退出后将退回登陆界面!',
            onOk :()=> {
                // return new Promise((resolve, reject) => {
                    // setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    removeUser()
                    Momory.user=''
                    this.props.history.replace('/login')
                // })
                //     .catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }

    render() {
        const {time,weather,weatherImg} =this.state
        const user = Momory.user.username
        return (
            <div className="header">
                <Row className="header-top">
                    <span>欢迎:{user}</span>
                    <a href="javascript:" onClick={this.exit}>退出</a>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{time}</span>
                        <span className="weather-img">
                            <img src={weatherImg} alt="天气"/>
                        </span>
                        <span className="weather-detail">{weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Header)