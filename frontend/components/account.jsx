var React = require('react'),
    SessionStore = require('../stores/session'),
    AccountDetail = require('./account_detail'),
    PasswordDetail = require('./password_detail'),
    ApiUtil = require('../util/api_util'),
    Link = require('react-router').Link;

module.exports = React.createClass({
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

  render: function () {

    return (
      <div className="accountContainer">
        <h1 className="accountHeader">Your Account</h1>

      <div className="accountIndex">

        <ul className="accountList">
          <li>
            <Link to="/acct" className="accountLink">Account</Link>
          </li>
          <li>
            <Link to="/password" className="accountLink">Password</Link>
          </li>
          <li>
            <Link to={"/"} className="accountLink">Log Out</Link>
          </li>
        </ul>
        <div className="accountDetail">{this.props.children}</div>
      </div>
      </div>
    );
  }

});
