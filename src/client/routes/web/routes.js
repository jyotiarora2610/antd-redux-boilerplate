import React from 'react'

import * as routePaths from './routeConstants'
import * as pageTypes from './pageTypeConstants'

import Loadable from 'react-loadable'

import { Button } from 'antd'

const ChunkErrorWrapper = () => (
  <Button type='primary' inline onClick={() => window.location.reload()}>Try Again</Button>
)

function Loading (props) {
  if (props.error) {
    return <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }}><ChunkErrorWrapper /></div>
  } else if (props.pastDelay) {
    return <EmptyDiv />
  } else {
    return null
  }
}

const EmptyDiv = () => <div />

// const LandingPageHeader = Loadable({
//   loader: () => import('../../../App'),
//   loading: EmptyDiv
// })

const LandingPageWarpper = Loadable({
  loader: () => import('../../../App'),
  loading: Loading
})

export const getRoutes = (loginState, cartState, orderNumber, location) => {
  const urlPathName = location.pathname

  return [
    {
      path: '/',
      exact: true,
      header: EmptyDiv,
      headerText: 'Order now',
      footerText: 'Order now',
      main: LandingPageWarpper,
      footer: EmptyDiv,
      forwardLink: routePaths.HOME_PAGE,
      pageType: pageTypes.LANDING_PAGE
    }
  ]
}
