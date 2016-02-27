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
    BookingForm = require('./components/booking/form'),
    BookingTaskers = require('./components/booking/taskers'),
    BookingDetails = require('./components/booking/details'),

    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    IndexRedirect = require('react-router').IndexRedirect;

window.ApiUtil = ApiUtil;

var routes = (
  <Route component={App} path="/">
    <Route component={Account} path="/account/">
      <IndexRoute component={AccountDetail} />
      <Route component={PasswordDetail} path="/account/password"/>
    </Route>


    <Route component={Dashboard} path="/dashboard/">
    </Route>

    <Route component={TaskIndex} path="/category/:category_id">
    </Route>

    <Route component={TaskerIndex} path="/tasks/:task_id">
    </Route>

    <Route component={BookingForm} path="/book/:task_id">
      <IndexRedirect to="/book/:task_id/details"/>
      <Route component={BookingDetails} path="/book/:task_id/details">
      </Route>
      <Route component={BookingTaskers} path="/book/:task_id/taskers">

      </Route>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function functionName() {
  ReactDom.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
  );
});
