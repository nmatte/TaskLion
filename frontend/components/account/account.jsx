var React = require('react'),
    SessionStore = require('../../stores/session'),
    AccountDetail = require('./detail'),
    PasswordDetail = require('./password_detail'),
    ApiUtil = require('../../util/api_util'),
    Link = require('react-router').Link,
    IndexLink = require('react-router').IndexLink,
    Router = require('react-router');

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
    var logout =
      <form method="post" action="/session" className="account-link" >
        <input type="hidden" name="_method" value="delete"/>
        <input type="submit" value="Log Out"/>
      </form>
    ;

    return <div className="accountContainer">
             <h1 className="accountHeader">Your Account</h1>
            <div className="accountIndex">
              <ul className="account-list">
                <li>
                  <IndexLink
                    to="/account/"
                    className="account-link"
                    activeClassName="selected">
                    Account
                  </IndexLink>
              </li>
              <li>
                <Link
                  to="/account/password/"
                  className="account-link"
                  activeClassName="selected">Password
                </Link>
              </li>
              <li>
                {logout}
              </li>
              </ul>
            <div className="accountDetail">{this.props.children}</div>
          </div>
      </div>;
  }

});
