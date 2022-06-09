import React, { Component } from "react";
import { Link } from "react-router-dom";
import { usuarios_cadastro } from "./Api";

class Cadastro extends Component {
    cadastro = () =>
        usuarios_cadastro(this.state).then(data => {
            // console.log(data.data);
            alert('Usuario criado')
            window.history.back();
        });

    render() {
        return (
            <div className="container">
                <Link to="/"><button type="button" className="btn btn-secondary">
                            voltar
                        </button></Link>
                <br/>
                <br/>
                <h3>Criar usuário</h3>
                <br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Endereço de Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Entre com email"
                            onChange={e =>
                                this.setState({ email: e.currentTarget.value })
                            }
                        />
                        {/* <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Senha"
                            onChange={e =>
                                this.setState({ senha: e.currentTarget.value })
                            }
                        />
                    </div>
                    {/* <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div> */}
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={e => {
                            e.preventDefault();
                            this.cadastro();
                        }}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        );
    }
}

export default Cadastro;
