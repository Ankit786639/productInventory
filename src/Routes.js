import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import SignIn from './Components/login';
import ProductInventory from './Components/productInventory';
import AddProduct from './Components/addProduct';

class Main_Routes extends Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={SignIn}/>
                        <Route exact path="/product_inventory" component={ProductInventory}/>
                        <Route exact path="/add_product" component={AddProduct}/>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}

export default Main_Routes;