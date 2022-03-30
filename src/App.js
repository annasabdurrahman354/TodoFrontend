import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import { useRecoilState } from 'recoil';
import { isLoggedIn } from './services/auth'
import AuthState from './states/authState';
import UserState from './states/userState';

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const SendEmailConfirmation = lazy(() => import('./pages/SendEmailConfirmation'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))

function App() {

  const [authState, setAuthState] = useRecoilState(AuthState)
  const [userState, setUserState] = useRecoilState(UserState)
  
  isLoggedIn(setAuthState, setUserState)
  
  if(authState){
    return (
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            {/* Place new routes over this */}
            <Route path="/app" component={Layout} />
            {/* If you have an index page, you can remothis Redirect */}
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
