import React from 'react'

import * as routePaths from './routeConstants'

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

const headerWrapper =  Loadable({
  loader: () => import('../../component/header/Header'),
  loading: Loading
})

const headerWithTabsWrapper =  Loadable({
  loader: () => import('../../component/header/HeaderWithTabs'),
  loading: Loading
})

const loginWrapper = Loadable({
  loader: () => import('../../component/pages/login/Login'),
  loading: Loading
})

export const getRoutes = (loginState) => {
  // const urlPathName = location.pathname

  return [
    {
      path: '/',
      exact: true,
      header: headerWrapper,
      main: LandingPageWarpper
    },
    {
      path: routePaths.LOGIN,
      exact: true,
      header: EmptyDiv,
      main: loginWrapper
    }
  ]
}
