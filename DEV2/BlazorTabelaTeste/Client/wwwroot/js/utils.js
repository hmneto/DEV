
function focusById(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.focus();
    }
}


function PreventEnterKey(id) {
            event.preventDefault();
            return false;
}



function getTotatlTarefas() {
    DotNet.invokeMethodAsync("BlazorCurso", "ObterTotalTarefas").
        then(resultado => {
            alert("total de tarefas: " + resultado)
        })
}



function getTotatlTarefasInstancia(dotnet) {
    return dotnet.invokeMethodAsync("ObterTotalTarefasInstancia").
        then(resultado => {
            alert("total de tarefas: " + resultado)
        })
}