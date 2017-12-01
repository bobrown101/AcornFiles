import React from 'react';
import { Router, Route} from 'react-router'
import { history } from '../store'
import App from '../containers/App';
const Routes = () => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        {/*<Route path="about" component={About}/>*/}
      </Route>
    </Router>
  );

}

export default Routes;