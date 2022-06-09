import React, { Component } from "react";
import { Link } from "react-router-dom";


class BotaoAdicionarRegistro extends Component {
    render() {
        return (
            <Link className={this.props.classe} to="/add">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                    ADICIONAR REGISTRO
                </button>
            </Link>
        );
    }
}

export default BotaoAdicionarRegistro;
