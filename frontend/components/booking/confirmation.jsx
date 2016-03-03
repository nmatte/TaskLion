var React = require('react'),
    BookingStore = require('../../stores/booking'),
    TaskApiUtil = require('../../util/tasker_api_util'),
    ApiUtil = require('../../util/api_util'),
    TaskStore = require('../../stores/task'),
    BookingActions = require('../../actions/booking_actions'),
    History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      task: TaskStore.find(this.props.params.task_id)
    };
  },

  componentWillMount: function() {
    this.taskListener = TaskStore.addListener(this._onTaskChange);
    TaskApiUtil.fetchTask(this.props.params.task_id);
  },

  _onTaskChange: function () {
    this.setState({
      task: TaskStore.find(this.props.params.task_id)
    });
  },

  componentWillUnmount: function() {
    this.taskListener.remove();
  },

  _submit: function (event) {
    ApiUtil.postBooking(BookingStore.current());
    BookingActions.clearBooking();
    this.history.push("/dashboard");
  },

  render: function () {
    var content;
    if (this.state.task === undefined) {
      return <div className="loader">Loading...</div>;
    } else {
      // var dateInfo = BookingStore.current().date
      var dateInfo = "Placeholder";
      // BookingStore.current().tasker_id

      var taskerName = "Curie T.";
      // BookingStore.current().address
      // BookingStore.current().description
      content = (
        <div className="confirmation-container">
          <div className="confirmation-panel shadow">
            <div className="confirmation-header-strip">
              <h2>
                {this.state.task.name}
              </h2>
              <span>
                <strong>$40</strong>/hr
              </span>
            </div>
            <div className="confirmation-section">
              <div className="confirmation-gutter">
                <div className="confirmation-col">
                  <label>Date & Time</label>
                  <div className="confirmation-section-value">
                    {dateInfo}
                  </div>
                </div>

                <div className="confirmation-tasker-info">
                    <div className="avatar-wrapper">
                      <div className="avatar-mini"/>
                    </div>
                    <div>
                      <label>Tasker</label>
                      <div className="confirmation-section-value">
                        {taskerName}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="confirmation-gutter">
              <label>Task Location</label>
              <div className="confirmation-section-value">160 Spear St., San Francisco, California</div>
            </div>
            <div className="confirmation-gutter">
              <label>Description</label>
              <div className="confirmation-section-value">Please smother me in cute cats.</div>
            </div>
            <section className="confirmation-section">
              <div className="confirmation-button-container">
                <button className="dark-blue-button confirmation-button" onClick={this._submit}>Confirm & Book</button>
              </div>
            </section>
          </div>
      </div>
    );

      return content;
    }
  }


});
