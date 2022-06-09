import React, { Component } from "react";
import { Link } from "react-router-dom";


class Add extends Component {
    state = {
        nome: "",
        entrada: "",
        data: "",
        tipo_entrada: "",
    };

    componentDidMount(){
        this.setState({fluxo_id:this.props.item_escolhido.id})
    }

    render() {
        
        return (
            <div>
                

                

                
                <div className="container">

                <Link to="/"><button type="button" className="btn btn-secondary">
                            voltar
                        </button></Link>


                        <br/><br/>
                        <h1 style={{ textAlign: 'center' }}>{this.props.obj.item_escolhido.nome_fluxo}</h1>
                        <br/>
                    <div className="form-group mt-5">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Nome para fluxo"
                            onChange={a =>
                                this.setState({ nome: a.currentTarget.value })
                            }
                        />
                    </div>

                    <div className="form-group mt-4">
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Valor do fluxo"
                            onChange={a =>
                                this.setState({
                                    entrada: a.currentTarget.value
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
                            className="form-control"
                            onChange={a =>
                                this.setState({ data: a.currentTarget.value })
                            }
                        />
                    </div>

                    <select
                        className="custom-select custom-select-lg mb-3 mt-2"
                        onChange={a =>
                            this.setState({
                                tipo_entrada: a.currentTarget.value
                            })
                        }
                    >
                        <option defaultValue>
                            Selecione se fluxo for de entrada ou saída
                        </option>
                        <option value="E">Entrada</option>
                        <option value="S">Saída</option>
                    </select>
                    <button
                        className="btn btn-primary"
                        onClick={async a => {
                            if (
                                this.state.nome &&
                                this.state.tipo_entrada &&
                                this.state.entrada &&
                                this.state.data
                            ) {
                                a.currentTarget.disabled = true;
                                await this.props.salvar(this.state)
                                await this.props.fluxo_escolhido(this.props.item_escolhido)
                                window.history.back();
                            }
                        }}
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        );
    }
}

export default Add;
