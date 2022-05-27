import react from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import BrowseDevelopers from "./BrowseDevelopers";
import AdminProjectsView from "./AdminProjectsView";

const PrivateComponent = () => {

    return (
        <Switch>
            <Route path="/projects" component={AdminProjectsView}/> 
            <Route path="/" component={BrowseDevelopers}/> 
          </Switch>
    )
}

export default PrivateComponent;

