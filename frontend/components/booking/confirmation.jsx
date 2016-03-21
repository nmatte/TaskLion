var React = require('react'),
    BookingStore = require('../../stores/booking'),
    SessionStore = require('../../stores/session'),
    TaskApiUtil = require('../../util/tasker_api_util'),
    ApiUtil = require('../../util/api_util'),
    TaskStore = require('../../stores/task'),
    TaskerStore = require('../../stores/tasker'),
    AvailableTaskStore = require('../../stores/available_task'),
    BookingActions = require('../../actions/booking_actions');

module.exports = React.createClass({

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
    var bk = BookingStore.current();
    bk.client_id = SessionStore.user().id;
    ApiUtil.postBooking(bk);
    BookingActions.clearBooking();
    // debugger;
    this.props.history.push("/dashboard");
  },

  render: function () {
    var content;
    if (this.state.availableTask === undefined) {
      return <div className="loader">Loading...</div>;
    } else {
      // var dateInfo = BookingStore.current().date
      var dateInfo = this.state.booking.date;
      // BookingStore.current().tasker_id
      var taskerName = this.state.availableTask.fname + " " + this.state.availableTask.lname.slice(0,1) + ".";


      var header =
        <div className="confirmation-header-strip">
          <h2>
            {this.state.availableTask.task_name}
          </h2>
          <span>
            <strong>${this.state.availableTask.rate}</strong>/hr
          </span>
        </div>;

      var dateInfos =
        <div className="confirmation-col">
          <label>Date & Time</label>
          <div className="confirmation-section-value">
            {dateInfo}
          </div>
        </div>;

      var avatar = <div className="loader white"/>;
      var t = this.state.availableTask;
      if (t.avatar) {
        avatar = <div className="avatar-mini" style={{backgroundImage: 'url('+t.avatar+')'}}/>;
      }
      var taskerInfos = (
        <div className="confirmation-tasker-info">
          <div className="avatar-wrapper">
            {avatar}
          </div>
          <div>
            <label>Tasker</label>
            <div className="confirmation-section-value">
              {taskerName}
            </div>
          </div>
        </div>
      );

      var location = (
        <div className="confirmation-gutter">
          <label>Task Location</label>
          <div className="confirmation-section-value">{this.state.booking.address}</div>
        </div>
      );

      var description = (
        <div className="confirmation-gutter">
          <label>Description</label>
          <div className="confirmation-section-value">{this.state.booking.description}</div>
        </div>
      );
      // BookingStore.current().address
      // BookingStore.current().description
      content =
        <article className="confirmation-container">
          <div className="confirmation-panel shadow">
            {header}
            <div className="confirmation-section">
              <div className="confirmation-gutter">
                {dateInfos}
                {taskerInfos}
              </div>
              {location}
              {description}
            </div>
            <section className="confirmation-section">
              <div className="confirmation-button-container">
                <button className="dark-blue-button confirmation-button" onClick={this._submit}>Confirm & Book</button>
              </div>
            </section>
          </div>
      </article>
    ;

      return content;
    }
  }


});
