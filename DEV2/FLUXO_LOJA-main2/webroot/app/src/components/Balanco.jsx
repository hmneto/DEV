import React, { Component } from "react";

class Balanco extends Component {
    contorno_balanco = { width: "100%", borderRadius: 5 };
    render() {
        return (
            <div className={this.props.classe}>
                <div
                    className="bg-success mb-1 p-1 text-center"
                    style={this.contorno_balanco}
                >
                    Total Entradas:{" "}
                    <span>
                        {this.props.registros
                            .filter(registro => {
                                if (registro.tipo_fluxo === "E") return true;
                            })
                            .reduce((acc, att) => (acc += att.valor), 0).toFixed(2)}
                    </span>
                </div>
                <div
                    className="bg-danger mt-2 p-1 text-center"
                    style={this.contorno_balanco}
                >
                    Total Saidas:{" "}
                    <span>
                        {this.props.registros
                            .filter(registro => {
                                if (registro.tipo_fluxo === "S") return true;
                            })
                            .reduce((acc, att) => (acc += att.valor), 0).toFixed(2)}
                    </span>
                </div>
            </div>
        );
    }
}

export default Balanco;
