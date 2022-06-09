import Axios from 'axios';
let url
if (process.env.REACT_APP_BASE_URL === 'window.location') {
  url = window.location.origin
} else {
  url = `${process.env['REACT_APP_BASE_URL']}`
}

const api = Axios.create({
  baseURL: url
})

export const usuarios_index = (obj) => api.post('/Usuarios', obj)

export const usuarios_cadastro = (obj) => api.post('/usuarios/cadastro', obj)

export const fluxo_index = (obj) => api.post('/fluxo', obj)

export const fluxo_create = (obj) => api.post('/fluxo/create', obj)

export const registros_index = (obj) => api.post('/registros', obj)

export const registros_registro = (obj) => api.post('/registros/registro', obj)

export const registros_editar = (obj) => api.post('/registros/editar', obj)

export const registros_salvar = (obj) => api.post('/registros/salvar', obj)