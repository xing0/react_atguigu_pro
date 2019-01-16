/*
* 入口函数
* */

import React from "react";
import {render} from 'react-dom'
import App from './app'
import {getUser} from './utils/localStorage'
import Momory from './utils/MomoryUtils'

const user  = getUser()
if(user && user._id){
    Momory.user = user
}

// import  App from  './src(1)/App'  //测试别人的项目


render(<App/>,document.getElementById('root'))