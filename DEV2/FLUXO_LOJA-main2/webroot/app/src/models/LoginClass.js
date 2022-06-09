import { usuarios_index } from './../Api'
export default class LoginClass {
    async login(o) {
        const retorno = await usuarios_index(o)
        return retorno.data
    }
}