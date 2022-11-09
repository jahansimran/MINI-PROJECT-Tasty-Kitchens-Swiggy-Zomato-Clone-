import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantDetailsRoute from './components/RestaurantDetails'
import ProtectedRoute from './components/ProtectedRoute'
import CartRoute from './components/CartRoute'
import NotFound from './components/NotFound/index'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/restaurant/:id"
          component={RestaurantDetailsRoute}
        />
        <ProtectedRoute exact path="/cart" component={CartRoute} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
