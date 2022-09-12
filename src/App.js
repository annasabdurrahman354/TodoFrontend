import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import { useRecoilState } from 'recoil';
import { isLoggedIn } from './services/auth'
import AuthState from './states/authState';
import UserState from './states/userState';
import Edit from './Edit'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/authentications/Login'))
const Register = lazy(() => import('./pages/authentications/Register'))
const ForgotPassword = lazy(() => import('./pages/authentications/ForgotPassword'))
const SendEmailConfirmation = lazy(() => import('./pages/authentications/SendEmailConfirmation'))
const ResetPassword = lazy(() => import('./pages/authentications/ResetPassword'))

function App() {

  const [authState, setAuthState] = useRecoilState(AuthState)
  const [userState, setUserState] = useRecoilState(UserState)
  
  isLoggedIn(setAuthState, setUserState)
  
  if(authState){
    return (
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/app" component={Layout} />
            <Redirect exact from="/*" to="/app" />
          </Switch>
        </Router>
    )
  }
  else{
    return (
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <Route path="/home" component={Edit}/>
            <Route path="/a/edit" component={Edit} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/send-email-verification/:username" component={SendEmailConfirmation} />
            <Route path="/reset-password/:email/:token" component={ResetPassword} />
            <Redirect exact from="/*" to="/login" />
          </Switch>
        </Router>
    )
  }
}

export default App
