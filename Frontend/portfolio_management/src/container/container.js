import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../login/login';
import dashboard from '../dashboard/dashboard';
import Stock from './stocks/stock';
import ViewStock from './stocks/ViewStock';
import SellStock from './stocks/SellStock';
import View from './stocks/View';
class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/stock" component={Stock}/>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/dashboard" component={dashboard} />
                        <Route exact path="/view/:id" component={ViewStock}/>
                        <Route exact path="/viewSell/:id" component={SellStock}/>
                        <Route exact path="/StockView/:id" component={View}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Container;
