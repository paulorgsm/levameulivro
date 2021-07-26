import { Route, Redirect } from "react-router-dom"
import { isAuthenticated } from "../services/auth";

function PrivateRoute(props){
    return isAuthenticated() ? (
        <Route path={props.path} component={props.component}/>
    ):(
        <Redirect to="/login"/>
    )
}

export default PrivateRoute;