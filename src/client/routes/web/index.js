import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { getRoutes } from './routes'

// import styles from './Routes.css'

import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import ReactGA from 'react-ga'


const logPageView = () => {
  ReactGA.set({page: window.location.pathname + window.location.search})
  ReactGA.pageview(window.location.pathname + window.location.search)
  return null
}

class Routes extends Component {
  // componentWillReceiveProps (nextProps) {
  //   if (this.props.location !== nextProps.location) {
  //     this.props.actions.updateTimeStamp()
  //   }
  // }

  render () {
    this.routes = getRoutes(this.props.loginState)
    this.currentKey = this.props.location.pathname.split('/')[1] || '/'
    this.timeout = {enter: 300, exit: 0}
    return (
      <div>
        <Route component={logPageView} />
        <Route
          render={() => {
            return (
              <div>
                <Switch location={this.props.location}>
                  {this.routes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
                    <Route
                      location={this.props.location}
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => (
                        <route.header
                          {...props}
                          headerText={route.headerText}
                          navBarLeftContent={route.navBarLeftContent}
                          navBarRightContent={route.navBarRightContent}
                        />
                      )}
                    />
                  ))}
                </Switch>
                <div style={{paddingTop: '54px'}}>
                  <div className='page-main'>
                    <Switch location={this.props.location}>
                      {this.routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                          location={this.props.location}
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.main}
                        />
                      ))}
                      <Route render={() => <div>Page Not Found</div>} />
                    </Switch>
                  </div>
                </div>
              </div>
            )
          }
          } />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    location: ownProps.location
  }
}

export default withRouter(
  connect(mapStateToProps)(Routes)
)
