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
    var path = this.props.location.pathname;
    var trust1 = " Free hugs if something goes wrong.";
    var trust2 = " All Taskers have been to the vet.";
    var bannerContent = path.indexOf("details") !== -1 ? trust1 : trust2;
    return (
      <div className="main-container">
        <div className="trust-banner"><strong>Trust & Safety Guarantee: </strong>{bannerContent}</div>
        {this.props.children}
      </div>
    );
  }
});
