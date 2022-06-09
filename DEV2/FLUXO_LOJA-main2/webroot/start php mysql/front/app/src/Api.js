import Axios from 'axios';

// const url = `${window.location.origin}/`
const url = 'http://192.168.99.100'

const api = Axios.create({
    baseURL:url
})

// export const loadList = (list)=> api.get(`${list}/send`)

// export const addList = (list,obj)=> api.post(`${list}/receve`,obj)



export const get_login = (obj)=> api.post('/usuario/Login.php',obj)

export const usuarios_cadastro = (obj)=> api.post('/usuario/cadastro',obj)

export const get_fluxo = (obj)=> api.post('/fluxo/get.php',obj)

export const fluxo_create = (obj)=> api.post('/fluxo/create.php',obj)

export const registros_index = (obj) => api.post('/registro/get_by_id_usuario.php',obj)

export const registros_registro = (obj) => api.post('/registro/registro',obj)

export const registros_editar = (obj) => api.post('/registro/editar',obj)

export const registros_salvar = (obj) => api.post('/registro/create.php',obj)