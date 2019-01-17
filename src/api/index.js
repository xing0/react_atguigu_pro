import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'

export function loginAjax (user) {
    return ajax('/login',user,'post')
}

export function getWeather(city) {
   return new Promise((resolve,reject)=>{
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url,
        {param:'callback'}, //若天气URL不正确，没有callback,故无法回调后面的函数
        (err,data)=>{
        if(err){
            console.log('连接天气异常:',err)
            message.error('连接天气异常!')
            return
        }
            if(data.status==='success'){//请求成功 返回数据
                resolve(data.results)
                console.log(data);
            }else{ //请求失败 //实际上不能只能,因为没有回调
                message.error('连接天气服务器失败!')
                console.log(data);
                resolve(data)
                // 开始报错
            }
        }
    )
    })
}

export const  getCategory = (parentId=0) =>ajax(`/manage/category/list`,{parentId})

export const addCategory = (categoryName,parentId=0) => ajax(`/manage/category/add`,{categoryName,parentId},'post')


export const upCategory =(categoryName,parentId=0)=>ajax(`/manage/category/update`,{categoryName,parentId},'post')