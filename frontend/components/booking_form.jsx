var React = require('react'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: SessionStore.user()
    };
  },
  componentDidMount: function() {
    this.userListener = SessionStore.addListener(this._onUserChange);
    ApiUtil.fetchCurrentUser();
  },

  _onUserChange: function () {
    this.setState({
      user: SessionStore.user()
    });
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.userListener = null;
  },

  render: function () {
    console.log(SessionStore.user());
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
