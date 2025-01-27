import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../component/Home'
import Login from '../container/Login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/Home' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
