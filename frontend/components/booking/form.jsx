var React = require('react'),
    SessionStore = require('../../stores/session'),
    BookingActions = require('../../actions/booking_actions'),
    ApiUtil = require('../../util/api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: SessionStore.user()
    };
  },
  componentDidMount: function() {
    this.userListener = SessionStore.addListener(this._onUserChange);
    ApiUtil.fetchCurrentUser();
    BookingActions.updateBooking({task_id: this.props.params.task_id});
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
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
