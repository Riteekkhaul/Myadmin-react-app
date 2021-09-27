import React from 'react'
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css";
import Home from './Pages/Home/Home';
import { BrowserRouter as Router ,  Route ,Switch } from 'react-router-dom';
import Userlist from './Pages/Userlist/Userlist';
import User from './Pages/User/User';
import Newuser from './Pages/Newuser/Newuser';
import Productlist from './Pages/Productlist/Productlist';
import Product from './Pages/Product/Product';
import Newproduct from './Pages/Newproduct/Newproduct';

const App = () => {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/users">
                        <Userlist />
                    </Route>
                    <Route  path="/users/:userid">
                        <User />
                    </Route>
                    <Route  path="/newuser">
                        <Newuser />
                    </Route>
        
                    <Route exact path="/productlist">
                        <Productlist />
                    </Route>
                    <Route  path="/productlist/:productid">
                    <Product />
                    </Route>
                    <Route  path="/newproduct">
                    <Newproduct />    
                    </Route>
                    
                </Switch>         
            </div> 
        </Router>
    );
}

export default App;
