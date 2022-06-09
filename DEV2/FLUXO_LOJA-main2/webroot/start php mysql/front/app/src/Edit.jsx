import React, { Component } from "react";
import { registros_registro } from "./Api";

import { Link } from "react-router-dom";
class Edit extends Component {
    state = {
        id: "",
        nome_entrada: "",
        valor: "",
        data: "",
        tipo_fluxo: "",
        fluxo_id: ""
    };

    async componentDidMount() {
        const id = window.location.pathname.split("/")[6];
        registros_registro({ id, login: this.props.login }).then(dados => {
            let {
                id,
                nome_entrada,
                valor,
                data,
                tipo_fluxo,
                fluxo_id
            } = dados.data;
            data = data.substr(0, 10);
            this.setState({
                id,
                nome_entrada,
                valor,
                data,
                tipo_fluxo,
                fluxo_id
            });
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Link to="/">
                        <button type="button" className="btn btn-secondary">
                            voltar
                        </button>
                    </Link>

                    <br />
                    <br />
                    <h3>Edição de registro</h3>
                    <div className="form-group mt-5">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Nome para fluxo"
                            defaultValue={this.state.nome_entrada}
                            onChange={a =>
                                this.setState({
                                    nome_entrada: a.currentTarget.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group mt-4">
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Valor do fluxo"
                            defaultValue={this.state.valor}
                            onChange={a =>
                                this.setState({
                                    valor: a.currentTarget.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Data</label>
                        <input
                            type="date"
                            min="1000-01-01"
                            max="3000-12-31"
                            defaultValue={this.state.data.substr(0, 10)}
                            className="form-control"
                            onChange={a => {
                                this.setState({ data: a.currentTarget.value });
                            }}
                        />
                    </div>

                    <select
                        className="custom-select custom-select-lg mb-3 mt-2"
                        value={this.state.tipo_fluxo}
                        onChange={a =>
                            this.setState({
                                tipo_fluxo: a.currentTarget.value
                            })
                        }
                    >
                        <option defaultValue>
                            Selecione se fluxo for de entrada ou saída
                        </option>
                        <option value="E">Entrada</option>
                        <option value="S">Saída</option>
                    </select>

                    <select
                        className="custom-select custom-select-lg mb-3 mt-2"
                        value={this.state.fluxo_id}
                        onChange={a =>
                            this.setState({
                                fluxo_id: a.currentTarget.value
                            })
                        }
                    >
                        <option defaultValue>Selecione se fluxo usado</option>

                        {this.props.fluxos.map(a => {
                            return (
                                <option key={a.id} value={a.id}>
                                    {a.nome_fluxo}
                                </option>
                            );
                        })}
                    </select>

                    <button
                        className="btn btn-primary"
                        onClick={async a => {
                            // a.currentTarget.disabled = await false;
                            await this.props.editar(this.state);
                            await this.props.fluxo_escolhido(
                                this.props.item_escolhido
                            );
                            await window.history.back();
                        }}
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        );
    }
}

export default Edit;
