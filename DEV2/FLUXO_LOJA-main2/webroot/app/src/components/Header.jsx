import React, { Component } from "react";

import { Link } from 'react-router-dom'

class Header extends Component {
    built_nav = () => (
        <ul className="navbar-nav mr-auto">

            {this.props.obj.nav_itens.map(data => (

                <li className="nav-item" key={data.nome_fluxo}>

                    <div
                        className="nav-link"
                        style={{cursor:'pointer'}}
                        onClick={a => this.props.func_fluxo_escolhido(data)}
                    >
                        {data.nome_fluxo}
                    </div>
                    
                </li>

            ))}

        </ul>
    );

    componentDidMount(){

        this.props.func_nav_fluxos();
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link
                    to="/add-fluxo"
                    className="navbar-brand"
                    style={{cursor:'pointer'}}
                >
                    {'Adicionar Fluxo'}
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    {this.built_nav()}
                </div>

            </nav>
        );
    }
}

export default Header;