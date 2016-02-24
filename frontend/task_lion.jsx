var React = require('react'),
    ReactDom = require('react-dom'),
    ApiUtil = require('./util/api_util'),
    Account = require('./components/account'),
    App = require('./components/app'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;

window.ApiUtil = ApiUtil;

var routes = (
  <Route component={App} path="/">
    <Route component={Account} path="/account">
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function functionName() {
  ReactDom.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
  );
});
