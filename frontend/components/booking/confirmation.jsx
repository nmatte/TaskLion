var React = require('react'),
    BookingStore = require('../../stores/booking'),
    TaskApiUtil = require('../../util/tasker_api_util'),
    ApiUtil = require('../../util/api_util'),
    TaskStore = require('../../stores/task'),
    TaskerStore = require('../../stores/tasker'),
    AvailableTaskStore = require('../../stores/available_task'),
    BookingActions = require('../../actions/booking_actions'),
    History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      availableTask: AvailableTaskStore.find(this.props.location.query.available_task_id),
      booking: BookingStore.current()
    };
  },

  componentDidMount: function() {
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
    this.availableTaskListener = AvailableTaskStore.addListener(this._onAvailableTaskChange);

    var id = this.props.location.query.available_task_id;
    BookingActions.fetchBooking();
    TaskApiUtil.fetchAvailableTask(id);

  },

  _onBookingChange: function () {
    var bk = BookingStore.current();
    var taskerId = parseInt(bk.tasker_id);
    this.setState({
      booking: bk,
      tasker: TaskerStore.find(taskerId)
    });
  },

  _onAvailableTaskChange: function () {
    this.setState({
      availableTask: AvailableTaskStore.find(this.props.location.query.available_task_id)
    });
  },

  componentWillUnmount: function() {
    this.availableTaskListener.remove();
    this.bookingListener.remove();
  },

  _submit: function (event) {
    ApiUtil.postBooking(BookingStore.current());
    BookingActions.clearBooking();
    this.history.push("/dashboard");
  },

  render: function () {
    var content;
    if (this.state.availableTask === undefined) {
      return <div className="loader">Loading...</div>;
    } else {
      // var dateInfo = BookingStore.current().date
      var dateInfo = "Placeholder";
      // BookingStore.current().tasker_id

      var taskerName = this.state.availableTask.fname || "Curie T.";
      // BookingStore.current().address
      // BookingStore.current().description
      content = (
        <div className="confirmation-container">
          <div className="confirmation-panel shadow">
            <div className="confirmation-header-strip">
              <h2>
                {this.state.availableTask.task_name}
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
