import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop.js'

import LoginPage from './pages/LoginPage';
import GroupListPage from './pages/GroupListPage';
import GroupPage from './pages/GroupPage';
import EditProfilePage from './pages/EditProfilePage';
import GroupSearchPage from './pages/GroupSearchPage';
import PlaceSearchPage from './pages/PlaceSearchPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route component={LoginPage} path={['/login', '/']} exact />
        <Route component={GroupListPage} path='/@:userId' exact/>
        <Route component={GroupPage} path='/group/:groupId' exact/>
        <Route component={EditProfilePage} path='/profile' />
        <Route component={GroupSearchPage} path='/search/group' exact/>
        <Route component={PlaceSearchPage} path='/search/place' exact/>
        <Redirect path="*" to="/login" />
      </Switch>
    </>
  );
}

export default App;
