var React = require('react'),
    ReactDom = require('react-dom'),
    ApiUtil = require('./util/api_util'),
    Account = require('./components/account'),
    AccountDetail = require('./components/account_detail'),
    PasswordDetail = require('./components/password_detail'),
    TaskIndex = require('./components/task_index'),
    App = require('./components/app'),
    Dashboard = require('./components/dashboard'),
    TaskerIndex = require('./components/tasker_index'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;

window.ApiUtil = ApiUtil;
window.TaskerApiUtil = require('./util/tasker_api_util');
window.TaskerStore = require('./stores/tasker');
var routes = (
  <Route component={App} path="/">
    <Route component={Account} path="/account">
      <Route component={AccountDetail} path="/acct"/>
      <Route component={PasswordDetail} path="/password"/>
    </Route>

    <Route component={Dashboard} path="/dashboard">
    </Route>

    <Route component={TaskIndex} path="/category/:category_id">
    </Route>

    <Route component={TaskerIndex} path="/tasks/:task_id">
      
    </Route>


  </Route>
);

document.addEventListener("DOMContentLoaded", function functionName() {
  ReactDom.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
  );
});
