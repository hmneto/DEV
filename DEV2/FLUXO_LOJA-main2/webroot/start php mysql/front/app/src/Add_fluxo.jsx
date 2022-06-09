import React, { Component } from "react";
import { Link } from "react-router-dom";

class Add_fluxo extends Component {

    render() {
        return (
            <div className="container">
                <Link to="/"><button type="button" className="btn btn-secondary">
                            voltar
                        </button></Link>
                        <br/><br/>
                <h3>Adicionar Fluxo</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Fluxo</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Fluxo"
                            onChange={a => this.setState({ fluxo: a.currentTarget.value })}
                        />
                        {/* <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small> */}
                    </div>
                    <button type="submit" className="btn btn-primary"
                    onClick={() =>
                      {
                          this.props.add_fluxo(this.state.fluxo)
                      }
                    }>
                        Enviar
                    </button>
                </form>
            </div>
        );
    }
}

export default Add_fluxo;
