import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { MainTemplate } from './templates/main'
import { route } from "./pages";

ReactDOM.render(
    <BrowserRouter>
        <MainTemplate>{route}</MainTemplate>
    </BrowserRouter>

    , document.getElementById('root'));