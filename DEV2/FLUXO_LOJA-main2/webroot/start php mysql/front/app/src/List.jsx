import React, { Component } from "react";
import PainelMes from "./components/PainelMes";
import Balanco from "./components/Balanco";
import BotaoAdicionarRegistro from "./components/BotaoAdicionarRegistro";
import PainelRegistros from "./components/PainelRegistros";
import Footer from "./components/Footer";
import lodash from "lodash";

class List extends Component {

    render() {  
        return (
            <div className="container">
                <div className="row">
                    <PainelMes
                        escolhe_mes={this.props.escolhe_mes}
                        classe="col-sm-12 col-md-5 mt-3 ml-1"
                    />
                    <Balanco
                        classe="col-sm-12 col-md-3 mt-1 p-3"
                        registros={this.props.registros}
                    />

                    <BotaoAdicionarRegistro classe="col-sm-12 col-md-3 mt-4 p-3" />
                </div>

                <PainelRegistros
                
                    classe="col-xs-12 col-md-4"
                    registros={lodash.chunk(this.props.registros, 3)}
                />
                <Footer />
            </div>
        );
    }
}

export default List;
