import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Route from './RouteWrapper';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    ); 
}