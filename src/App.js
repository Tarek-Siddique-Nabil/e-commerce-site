import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Notfound from './components/Error/Notfound';
import Header from './components/Header/Header';
import Inventory from './components/inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Placeorder from './components/placeorder/Placeorder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path='/placeOrder'>
             <Placeorder></Placeorder>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
