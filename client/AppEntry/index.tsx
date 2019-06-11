import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // HOC to update changes without page reloads
import Spinner from 'react-spinner-material';

// Acts like normalize.css. See: https://material-ui.com/components/css-baseline/
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '@client/MaterialUI';

// Components
import { Header } from '@components/Header';
import { Home } from '@components/Home/index';
import { Test } from '@components/Test';
import Footer from '@client/Components/Footer';
import ResponsiveDrawer from '@client/MaterialUI/ResponsiveDrawer';
const Template = lazy(() => import(/* webpackChunkName: "MyTemplate" */ '@components/Template'));

export const AppEntry = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HMRContent />
  </ThemeProvider>
);

const HMRContent: React.FC = hot(module)(() => (
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
        <div className="page-wrapper">
          <ResponsiveDrawer>
            <Switch>
              <Route exact path="/" component={() => <Home sth="Hello!!!!!" />} />
              <Route exact path="/testing" component={Test} />
              <Route exact path="/template" component={Template} />
              <Route exact path="*" component={() => <div>NoMatchPage</div>} />
            </Switch>
          </ResponsiveDrawer>
        </div>
        {/* <Footer /> */}
      </Router>
    </Suspense>
  </div>
));

export default AppEntry;
