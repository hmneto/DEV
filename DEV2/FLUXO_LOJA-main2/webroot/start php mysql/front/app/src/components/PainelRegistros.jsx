import React, { Component } from "react";
import { Link } from "react-router-dom";

class PainelRegistros extends Component {
    obterData = (dado) => {
        return `${dado.data.substr(0, 10).split("-")[2]}/${
            dado.data.substr(0, 10).split("-")[1]
        }/${dado.data.substr(0, 10).split("-")[0]}`;
        // return `${new Date(dado.data).getDate() + 1}/${new Date(
        //     dado.data
        // ).getMonth() + 1}/${new Date(dado.data).getFullYear()}`;
    };

    retorno_cartao = (dado) => (
        <div
            className={
                (dado.tipo_fluxo === "E"
                    ? "card bg-success "
                    : "card bg-danger ") + `${this.props.classe} `
            }
        >
            <div className="card-body">
                <h5 className="card-title">{dado.nome_entrada}</h5>
                <p className="card-text">R$ {dado.valor}</p>
                <p className="card-text">{this.obterData(dado)}</p>
                <Link to={`/edit/${dado.id}`} className="btn btn-primary">
                    Editar
                </Link>
            </div>
        </div>
    );

    retornaCartao = (dado) => (
        <div className="row" key={dado[0].id}>
            {dado[0] ? this.retorno_cartao(dado[0]) : false}
            {dado[1] ? this.retorno_cartao(dado[1]) : false}
            {dado[2] ? this.retorno_cartao(dado[2]) : false}
        </div>
    );

    render() {
        return (
            <div>
                {this.props.registros.map((dado) => this.retornaCartao(dado))}
            </div>
        );
    }
}

export default PainelRegistros;
