import React, { Fragment } from 'react'

import TituloView from '../components/TituloView'

import MyButtons from '../components/MyButtons'

export default props => {
  // console.log(Object.keys(props))

  // props.navigation.navigate('Tela2')

  return(
    <Fragment>
      <TituloView color="#A00">
        Tela 1
      </TituloView>

      <MyButtons { ...props } tela='Tela2' />
    </Fragment>
  )
}
