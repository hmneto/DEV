  function arquivaPagamentoPendente(idChamado, idParceiro) {
            iniciaCarregamento()
            fetch('/parceiro/BaixaParceiro', {
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                body: JSON.stringify({ idChamado, idParceiro, notaFiscal: prompt("NFE do parceiro") })
            })
                .then(x => x.text())
                .then(x => {
                    let btnEnviarParceiroPendente = document.getElementsByClassName('btnEnviarParceiroPendente')
                    for (var i = 0; i < btnEnviarParceiroPendente.length; i++) {
                        btnEnviarParceiroPendente[i].disabled = true
                    }
                    if (JSON.parse(x).success == true)
                        ResultRoteiroSuccess(JSON.parse(x).msg, 3000, "Sucesso")
                    else
                        ResultRoteiroFailure(JSON.parse(x).msg, 3000, "Falha")
                    terminoCarregamento()
                    for (var i = 0; i < btnEnviarParceiroPendente.length; i++) {
                        btnEnviarParceiroPendente[i].disabled = false
                    }
                })
        }
