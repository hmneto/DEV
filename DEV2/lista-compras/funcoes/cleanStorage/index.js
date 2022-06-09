module.exports = function() {
    if(prompt('entre com a senha') == 481291){
        dados = []
        localStorage.setItem('dados3', JSON.stringify(dados))   
        return true
    }
    return false
}