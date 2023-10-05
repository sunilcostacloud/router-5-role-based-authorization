import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import PageNotFound from './components/PageNotFound';

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/linkpage" component={LinkPage} />
        <Route exact path="/unauthorized" component={Unauthorized} />

        <Route
          exact
          path="/"
          render={(props) => (
            <RequireAuth {...props} allowedRoles={[ROLES.User]}>
              <Home />
            </RequireAuth>
          )}
        />

        <Route
          exact
          path="/editor"
          render={(props) => (
            <RequireAuth {...props} allowedRoles={[ROLES.Editor]}>
              <Editor />
            </RequireAuth>
          )}
        />

        <Route
          exact
          path="/admin"
          render={(props) => (
            <RequireAuth {...props} allowedRoles={[ROLES.Admin]}>
              <Admin />
            </RequireAuth>
          )}
        />

        <Route
          exact
          path="/lounge"
          render={(props) => (
            <RequireAuth {...props} allowedRoles={[ROLES.Editor, ROLES.Admin]}>
              <Lounge />
            </RequireAuth>
          )}
        />

        {/* This route will match any unmatched route */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
