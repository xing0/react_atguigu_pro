import store from 'store'

const UESR_KEY = 'user_key'
export function saveUser(user) {
    console.log(1);
    return store.set(UESR_KEY,user)
}

export function getUser() {
    return store.get(UESR_KEY)
}

export function removeUser() {
    return store.remove(UESR_KEY)
}