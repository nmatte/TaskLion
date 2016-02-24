var React = require('react'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      user: SessionStore.user(),
      tab: "account"
    };
  },

  _onSessionChange: function () {
    this.setState({
      user: SessionStore.user()
    });
  },

  componentDidMount: function () {
    SessionStore.addListener(this._onSessionChange);
    ApiUtil.fetchCurrentUser();
  },

  _showAccount: function () {
    this.setState({
      tab: "account"
    });
  },

  _showPassword: function () {
    this.setState({
      tab: "password"
    });
  },

  render: function () {
    var content;

    switch (this.state.tab) {
      case "account":
        content = <text>{this.state.user.fname}</text>;
        break;
      case "password":
        content = <text>password</text>;
    }

    return (
      <div>
        <h3>Your Account</h3>
        <ul>
          <li onClick={this._showAccount}>Account</li>
          <li onClick={this._showPassword}>Password</li>
          <li>Log Out</li>
        </ul>
        <div>{content}</div>
      </div>
    );
  }

});
