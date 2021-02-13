import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Router>
        <Switch>
          <Route exact path="/:title/:id" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={() => (<p>404</p>)} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes;
