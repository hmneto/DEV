import React, { Fragment } from 'react'

import TituloView from '../components/TituloView'

import MyButtons from '../components/MyButtons'

export default props => {
  // console.log(Object.keys(props))
  // console.log(props.route.params.numero)
  // const num = props.route.params.numero
  return(
    <Fragment>
      <TituloView color="#0A0">
        Tela 2
      </TituloView>

    </Fragment>
  )
}
