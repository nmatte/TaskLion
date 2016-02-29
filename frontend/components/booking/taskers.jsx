var React = require('react'),
    BookingStore = require('../../stores/booking'),
    TaskerStore = require('../../stores/tasker'),
    TaskStore = require('../../stores/task'),
    TaskerIndex = require('./../tasker_index'),
    DateFormat = require('dateformat'),
    BookingActions = require('../../actions/booking_actions'),
    TaskApiUtil = require('../../util/tasker_api_util');
  var History = require('react-router').History;
module.exports = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {
      taskers: TaskerStore.all(),
      task: TaskStore.find(this.props.params.task_id)
    };
  },

  _onTaskersChange: function () {
    this.setState({
      taskers: TaskerStore.all(),
      task: TaskStore.find(this.props.params.task_id)
    });
  },

  _onBookingChange: function () {
    this.history.push("book/" + this.props.params.task_id + "/confirm");
  },

  _dateChange: function (event) {
    BookingActions.updateBooking({date: event.target.value});
  },

  componentWillUnmount: function() {
    this.taskerListener.remove();
    this.taskerListener = null;
    this.bookingListener.remove();
    this.bookingListener = null;
  },

  componentDidMount: function() {
    this.taskerListener = TaskerStore.addListener(this._onTaskersChange);
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
    TaskApiUtil.fetchTaskers(this.props.params.task_id);
    TaskApiUtil.fetchTask(this.props.params.task_id);
  },

  componentWillReceiveProps: function(nextProps) {
    TaskApiUtil.fetchTaskers(nextProps.params.task_id);
    TaskApiUtil.fetchTask(nextProps.params.task_id);
  },

  render: function () {
    var today = DateFormat(Date.now(), "yyyy-mm-dd");
    return (
      <div className="col-container">
        <div>{this.state.task.name}</div>
        <br></br>
        <div><input
          type="date"
          onChange={this._dateChange}
          min={today}
          value={today}
          />

        </div>
        <br></br>
        <TaskerIndex taskers={this.state.taskers}/>
      </div>
    );
  }
});
