/*
* 入口函数
* */

import React from "react";
import {render} from 'react-dom'
import App from './app'
import {getUser} from './utils/localStorage'
import momory from './utils/momoryUtils'


if(!(momory.user=getUser())){ //如果local为空  则跳转至login
    console.log(1);

}else{//如果local有值  则显示admin
    console.log(2);
}

// import  App from  './src(1)/App'  //测试别人的项目


render(<App/>,document.getElementById('root'))