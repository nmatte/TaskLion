var React = require('react'),
    ReactDom = require('react-dom'),
    BookingStore = require('../../stores/booking'),
    TaskerStore = require('../../stores/tasker'),
    TaskStore = require('../../stores/task'),
    TaskerIndex = require('./../taskers/index'),
    TaskBanner = require('./task_banner'),
    DateFormat = require('dateformat'),
    BookingActions = require('../../actions/booking_actions'),
    TaskApiUtil = require('../../util/tasker_api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tomorrowString = DateFormat(tomorrow, "yyyy-mm-dd");

    return {
      taskers: TaskerStore.all(),
      task: TaskStore.find(this.props.params.task_id),
      date: tomorrowString,
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
    TaskApiUtil.fetchTaskers(this.props.params.task_id);
    TaskApiUtil.fetchTask(this.props.params.task_id);
    window.addEventListener("scroll",this._onScroll);
  },

  componentWillUnmount: function() {
    this.taskerListener.remove();
    this.taskerListener = null;

    BookingActions.updateBooking({date: this.state.date});
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
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tomorrowString = DateFormat(tomorrow, "yyyy-mm-dd");
    return (
      <div className="taskers-main">
        <TaskBanner task={this.state.task}/>
        <div className="col-container">
          <div className="date-placeholder">
            <div
              className={bookingContainerClass}>
              <input
                type="date"
                valueLink={this.linkState('date')}
                className="booking-date"
                onscroll={this._onScroll}
                min={tomorrowString}
                />
            </div>
          </div>
          <TaskerIndex taskers={this.state.taskers} taskId={this.props.params.task_id}/>
        </div>
      </div>
    );
  }
});
