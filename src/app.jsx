import React, {Component} from 'react'
import Login from './page/login/login'
import Admin from './page/admin/admin'
import {Route,BrowserRouter,Switch} from 'react-router-dom'


export default class APP  extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" component={Admin}/>
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}
