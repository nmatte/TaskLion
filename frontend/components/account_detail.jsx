var React = require('react'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: ""
    };
  },

  getNameFromStore: function () {
    return SessionStore.user().fname + " " + SessionStore.user().lname;
  },

  componentDidMount: function() {
    this.sessListener = SessionStore.addListener(this._sessionListener);
    ApiUtil.fetchCurrentUser();
  },

  _sessionListener: function () {
    this.setState({name: this.getNameFromStore()});
  },

  componentWillUnmount: function() {
    this.sessListener.remove();
  },
  render: function () {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
});
