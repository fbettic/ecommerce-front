import React from "react";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Switch>
          <Route exact path='/'>
            <ProductList></ProductList>
          </Route>
          <Route path='/product/:id'>
            <Product></Product>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
