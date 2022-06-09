import { get_login,get_fluxo } from './../Api'
class objeto{
    async login(email,senha){
        const form = new FormData();
        form.append('email',email)
        form.append('senha',senha)
        let t = await get_login(form);
        const { user_connected } = t.data
        if(!user_connected){
            alert('error login')
            return {
                user_connected :false
            }
        }
        
        return  {
            user_connected
        }
    }

    async get_nav_fluxo(login){
        const form = new FormData();
        form.append("id", login);
        const nav_itens = await get_fluxo(form);
        return {
            nav_itens: nav_itens.data
        }
    }
}

export default objeto