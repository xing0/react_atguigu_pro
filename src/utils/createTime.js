// 获取当前时间
export  const getTime = () =>{
    const data = new Date()
    const year =data.getFullYear()
    const month =data.getMonth()+1
    const day =data.getDate()
    const xingqi =data.getDay()
    const hours =data.getHours()
    const min =data.getMinutes()
    const sec =data.getSeconds()
    return `${year}-${month}-${day} 星期${xingqi==0?'天':xingqi} ${hours}:${min}:${sec<10?'0'+sec:sec}`
}