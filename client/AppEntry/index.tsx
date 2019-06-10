import React, { Suspense } from 'react';
import Spinner from 'react-spinner-material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Components
import { Header } from '@components/Header';
import { Home } from '@components/Home/index';
import { Test } from '@components/Test';

const AppEntry: React.FC = hot(module)(() => (
  <div className="app-container">
    <Suspense
      fallback={
        <Spinner //
          size={120}
          spinnerColor={'#333'}
          spinnerWidth={2}
          visible={true}
        />
      }
    >
      <Router basename={process.env.BASE_REF || '/'}>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={() => <Home sth="Hello!!" />} />
          <Route exact path="/testing" component={Test} />
          <Route exact path="/template" component={Template} />
          <Route exact path="/dynamic" component={DynamicLoad} />
          <Route exact path="*" component={() => <div>NoMatchPage</div>} />
        </Switch>
        <hr />
      </Router>
    </Suspense>
  </div>
));

export default AppEntry;

const Template = React.lazy(() =>
  import(/* webpackChunkName: "MyTemplate" */ '../Components/Template')
);
const DynamicLoad = React.lazy(() =>
  import(/* webpackChunkName: "DynamicLoad" */ '../Components/DynamicLoad')
);
