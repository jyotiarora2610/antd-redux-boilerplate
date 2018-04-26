import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

export const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: '/home',
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: state => (
    state.loginState.loginDetails.verification.isAuthenticated !== null &&
    state.loginState.loginDetails.verification.isAuthenticated
  ),
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
})

// export const hasUserSelectedLocation = connectedRouterRedirect({
//   // The url to redirect user to if they fail
//   redirectPath: '/home',
//   // If selector is true, wrapper will not redirect
//   // For example let's check that state contains user data
//   authenticatedSelector: state => (
//     state.servicableLocationCityListState.selectedLocation.selectedServicableLocationCity
//   ),
//   // A nice display name for this check
//   wrapperDisplayName: 'HasUserSelectedLocation'
// })
//
// export const hasCartPrepared = connectedRouterRedirect({
//   // The url to redirect user to if they fail
//   redirectPath: '/home',
//   // If selector is true, wrapper will not redirect
//   // For example let's check that state contains user data
//   authenticatedSelector: state => (
//     state.cartState.cartDetails.payload.patient_id !== null &&
//     state.cartState.cartDetails.payload.patient_id
//   ),
//   // A nice display name for this check
//   wrapperDisplayName: 'HasCartPrepared'
// })
