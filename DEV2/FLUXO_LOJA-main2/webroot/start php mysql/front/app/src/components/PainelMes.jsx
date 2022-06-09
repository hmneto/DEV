import React, { Component } from "react";

class PainelMes extends Component {
    state = {
        meses: [
            { value: "00", nome: "Tudo" },
            { value: "01", nome: "Janeiro" },
            { value: "02", nome: "Fevereiro" },
            { value: "03", nome: "Março" },
            { value: "04", nome: "Abril" },
            { value: "05", nome: "Maio" },
            { value: "06", nome: "Junho" },
            { value: "07", nome: "Julho" },
            { value: "08", nome: "Agosto" },
            { value: "09", nome: "Setembro" },
            { value: "10", nome: "Outubro" },
            { value: "11", nome: "Novembro" },
            { value: "12", nome: "Dezembro" }
        ]
    };
    render() {
        return (
            <div className={this.props.classe} style={{ fontSize: "50px" }}>
                <select
                    style={{ width: "100%" }}
                    onChange={s => {
                        const { value } = s.target;
                        this.props.escolhe_mes(value);
                    }}
                >
                    {this.state.meses.map(mes=><option key={mes.value} value={mes.value}>{mes.nome}</option>)}
                </select>

                <select
                    style={{ width: "100%" }}
                    onChange={s => {
                        const { value } = s.target;
                        this.props.manipula_mes(value);
                    }}
                >
                    <option>1</option>
                    {/* {this.state.meses.map(mes=><option key={mes.value} value={mes.value}>{mes.nome}</option>)} */}
                </select>
            </div>
        );
    }
}

export default PainelMes;
