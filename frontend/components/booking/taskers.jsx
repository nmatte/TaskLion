var React = require('react'),
    ReactDom = require('react-dom'),
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
      task: TaskStore.find(this.props.params.task_id),
      dateContainerAtTop: false,
      alreadyRendered: false
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

  _onScroll: function () {
    if (document.getElementsByClassName('booking-date-container').length > 0) {
      if (this.dateContainer === undefined) {
        this.dateContainer = document.getElementsByClassName('booking-date-container')[0];
        this.dateContainerLeft = this.dateContainer.offsetLeft;
        this.dateContainerTop = this.dateContainer.offsetTop;
      }
    }

    this._scrolledPastDateContainer();
  },

  _scrolledPastDateContainer: function () {
    if(!this.state.dateContainerAtTop && window.scrollY > this.dateContainerTop) {
      this.setState({dateContainerAtTop: true});
    }
    if (this.state.dateContainerAtTop && window.scrollY < this.dateContainerTop) {
      this.setState({dateContainerAtTop: false});
    }
  },


  componentDidMount: function() {
    this.taskerListener = TaskerStore.addListener(this._onTaskersChange);
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
    TaskApiUtil.fetchTaskers(this.props.params.task_id);
    TaskApiUtil.fetchTask(this.props.params.task_id);
    window.addEventListener("scroll",this._onScroll);
  },
  componentWillUnmount: function() {
    this.taskerListener.remove();
    this.taskerListener = null;
    this.bookingListener.remove();
    this.bookingListener = null;

    window.removeEventListener("scroll", this._onScroll);
  },

  componentWillReceiveProps: function(nextProps) {
    TaskApiUtil.fetchTaskers(nextProps.params.task_id);
    TaskApiUtil.fetchTask(nextProps.params.task_id);
  },

  render: function () {
    var bookingContainerClass =
      this.state.dateContainerAtTop
      ? "fixed "
      : "";
    var bookingContainerStyle =
      this.state.dateContainerAtTop
      ? {left: this.dateContainerLeft}
      : {};
    bookingContainerClass += "booking-date-container";
    var today = DateFormat(Date.now(), "yyyy-mm-dd");
    return (
      <div className="col-container">
        <div
          className={bookingContainerClass}>
          <input
          type="date"
          onChange={this._dateChange}
          className="booking-date"
          onscroll={this._onScroll}
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
