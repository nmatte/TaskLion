var React = require('react'),
    CategoryIndex = require('./category_index'),
    SearchBar = require('./search_bar'),
    SessionStore = require('../stores/session'),
    AvailableTaskStore = require('../stores/available_task'),
    TaskerApiUtil = require('../util/tasker_api_util'),
    ApiUtil = require('../util/api_util');

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
    if (this.state.user) {
      welcome = <h1>Welcome to TaskLion, {this.state.user.fname}!</h1>;
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

        <div className="get-started-container">
          <h2>How to Get Started</h2>
          <p>We're excited to help! Here's how it works:</p>
          <div className="get-started-step">
            <div className="get-started-icon">
              1
            </div>
            <div>
              <h3>Tell us what you need help with</h3>
              <p>
                {"Pristine, unbroken porcelain lying around? You name it. We've got you covered."}
              </p>
            </div>
          </div>
          <div className="get-started-step">
            <div className="get-started-icon">
              2
            </div>
            <div>
              <h3>Select a date and time</h3>
              <p>
                {"Let us know when you need your task done. We'll find the best Taskers who fit your schedule."}
              </p>
            </div>
          </div>
          <div className="get-started-step">
            <div className="get-started-icon">
              3
            </div>
            <div>
              <h3>Choose a Cat</h3>
              <p>
                Our highly qualified Taskers have all been to the vet, so whomever you choose, you can rest assured they they'll get the job done right.
              </p>
            </div>
          </div>
        </div>
        <div className="category-index-container">
          <h2>Top Categories in Your Area</h2>
          <CategoryIndex static={false} />

        </div>
      </div>

    );
  }
});
