import { atom } from 'recoil'

const AuthState = atom({
    key: 'AuthState',
    default: false
})

export default AuthState;