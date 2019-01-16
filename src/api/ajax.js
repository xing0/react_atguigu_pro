import axios from 'axios'
import {message} from 'antd'


export default function ajax (url,data={},method='get'){
    return new Promise((resolve,reject)=>{
        let promise =null
    if(method === 'get'||method === 'GET'){
        //是get请求
        promise = axios.get(url,{params:data})
    }else {
        promise = axios.post(url,data)
    }
    promise.then(response=>{
        resolve(response.data)
    })
        .catch(err=>{
            console.log('请求错误:',err);
            message.error('请求错误了')
        })
})
}