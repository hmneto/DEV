import { forEach } from "lodash";
import React, { Component } from "react";

class PainelMes extends Component {
    state = {
        meses: [
            // { value: "00", nome: "Tudo" },
            // { value: "01", nome: "Janeiro" },
            // { value: "02", nome: "Fevereiro" },
            // { value: "03", nome: "Março" },
            // { value: "04", nome: "Abril" },
            // { value: "05", nome: "Maio" },
            // { value: "06", nome: "Junho" },
            // { value: "07", nome: "Julho" },
            // { value: "08", nome: "Agosto" },
            // { value: "09", nome: "Setembro" },
            // { value: "10", nome: "Outubro" },
            // { value: "11", nome: "Novembro" },
            // { value: "12", nome: "Dezembro" }
        ]
    };

    obterData = dado => {
        let dadoRetornado = {}
        dadoRetornado.mes = dado.data.substr(0, 10).split("-")[1];
        dadoRetornado.ano = dado.data.substr(0, 10).split("-")[0];
        // console.log('obter data ', dadoRetornado)
        const ndadoRetornado = `${dadoRetornado.mes}-${dadoRetornado.ano}`
        return ndadoRetornado
    }

    render() {
        const list = []
        const listq = []
        list.push(JSON.stringify('00-0000'))
        this.props.registros.forEach(val => {
            if (list.indexOf(JSON.stringify(this.obterData(val))) === -1) {
                list.push(JSON.stringify(this.obterData(val)))
            }


        })

        

        
        return (

            <div className={this.props.classe} style={{ fontSize: "50px" }}>
                {/* {console.log()} */}
                <select
                    style={{ width: "100%" }}
                    onChange={s => {
                        const { value } = s.target;
                        this.props.escolhe_mes(value);
                    }}
                >
                    {list.map(mes => <option key={mes} value={mes}>{mes}</option>)}
                </select>

                {/* <select
                    style={{ width: "100%" }}
                // onChange={s => {
                //     const { value } = s.target;
                //     this.props.manipula_mes(value);
                // }}
                >
                    <option>1</option>
                    {this.state.meses.map(mes=><option key={mes.value} value={mes.value}>{mes.nome}</option>)}
                </select> */}
            </div>
        );
    }
}

export default PainelMes;
