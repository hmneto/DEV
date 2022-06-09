import React, { Component } from 'react';
import { Header } from '../../organisms/header';


export class MainTemplate extends Component {
    render() {
        return (

            <div>
                <Header />
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

