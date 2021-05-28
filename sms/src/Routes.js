import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Home"

const AppRoutes = () => (
    <Switch>
        <Route path="/home" component={Home}/>
    </Switch>
)
class Routes extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/" render={() => <Redirect to="/home" />} exact></Route>
                <Route component={AppContainer}></Route>
            </Switch>
        )
    }
    
}

const AppContainer = () => {
    return (
        <div className="add-margin">
        <AppRoutes />
        </div>
    )
}

export default Routes;
