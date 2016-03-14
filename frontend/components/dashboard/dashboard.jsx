var React = require('react'),
    CategoryIndex = require('../category_index'),
    SearchBar = require('../search_bar'),
    SessionStore = require('../../stores/session'),
    AvailableTaskStore = require('../../stores/available_task'),
    BookingIndex = require('../booking/index'),
    TaskerApiUtil = require('../../util/tasker_api_util'),
    GettingStarted = require('./getting_started'),
    ApiUtil = require('../../util/api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: SessionStore.user()
    };
  },

  _sessionListener: function () {
    this.setState({user: SessionStore.user()});
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._sessionListener);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  render: function () {
    var welcome = "";
    var bookingsContent = <GettingStarted/>;
    if (this.state.user) {
      welcome = <h1>Welcome to TaskLion, {this.state.user.fname}!</h1>;

      if (this.state.user.bookings) {
        bookingsContent = <BookingIndex bookings={this.state.user.bookings}/>;
      }
    }
    return (
      <div className="dashboard-main">
        <div className="welcome-container">
          <div className="profile-avatar">

          </div>
          <div className="welcome-title">
            {welcome}
            <SearchBar/>
          </div>
        </div>

        {bookingsContent}
        <div className="category-index-container">
          <h2>Top Categories in Your Area</h2>
          <CategoryIndex static={false} />

        </div>
      </div>

    );
  }
});
