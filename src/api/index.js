import ajax from './ajax'

export function loginAjax (user) {
    return ajax('/login',user,'post')
}
