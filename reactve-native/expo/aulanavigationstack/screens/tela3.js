import React, { Fragment } from 'react'

import TituloView from '../components/TituloView'

import MyButtons from '../components/MyButtons'

export default props => {

  return(
    <Fragment>
      <TituloView color="#00A">
        Tela 3
      </TituloView>

      <MyButtons { ...props } tela='Tela3'/>
    </Fragment>
  )
}
