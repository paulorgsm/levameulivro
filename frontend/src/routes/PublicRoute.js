import { Route } from 'react-router-dom';

function PublicRoute(props) {
    return (<Route path={props.path} component={props.component}/>)
}


export default PublicRoute;