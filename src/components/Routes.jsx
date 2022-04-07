import React from 'react'

import {Route,Switch} from 'react-router-dom'

import Dashboard from '../Screens/Dashboard'
import Customer from '../Screens/Customer'
import Pointers from '../Screens/Pointers'
import Analytics from '../Screens/Analytics'
import Products from '../Screens/Products'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customer}/>
            <Route path='/pointers' component={Pointers}/>
            <Route path='/solar_analytics' component={Analytics}/>
            <Route path='/products' component={Products}/>
        </Switch>
    )
}



export default Routes
