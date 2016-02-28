var React = require('react'),
    SessionStore = require('../stores/session'),
    AccountDetail = require('./account_detail'),
    PasswordDetail = require('./password_detail'),
    ApiUtil = require('../util/api_util'),
    Link = require('react-router').Link,
    IndexLink = require('react-router').IndexLink,
    History = require('react-router').History,
    Router = require('react-router');

module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      user: SessionStore.user()
    };
  },

  _onSessionChange: function () {
    this.setState({
      user: SessionStore.user()
    });
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onSessionChange);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.sessionListener = null;
  },

  _pushAcct: function () {
    var url = "/account/";
    this.history.push({pathname: url});
  },

  _pushPass: function () {
    var url = "/account/password/";
    this.history.push({pathname: url});
    // debugger;
  },


  render: function () {
    var pathWords = this.props.location.pathname
    .split("/")
    .filter(function(el) {return el.length !== 0;});

    var passLink = "";
    var accLink = "";
    // debugger;
    if (pathWords.indexOf("password") !== -1) {
      passLink = " selected";
    } else {
      accLink = " selected";
    }

    var logout = (
      <form method="post" action="/session" className="account-link" >
        <input type="hidden" name="_method" value="delete"/>
        <input type="submit" value="Log Out"/>
      </form>
    );

    return (
      <div className="accountContainer">
        <h1 className="accountHeader">Your Account</h1>

      <div className="accountIndex">
        <ul className="account-list">
          <li>
            <IndexLink
              to="/account/"
              className={"account-link " + accLink}
              onClick={this._pushAcct}>
              Account</IndexLink>
          </li>
          <li>
            <Link
              to="/account/password/"
              className={"account-link " + passLink}
              onClick={this._pushPass}>Password</Link>
          </li>
          <li>
            {logout}
          </li>
        </ul>
        <div className="accountDetail">{this.props.children}</div>
      </div>
      </div>
    );
  }

});
