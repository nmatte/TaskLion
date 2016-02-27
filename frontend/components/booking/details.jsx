var React = require('react'),
    BookingActions = require('../../actions/booking_actions'),
    History = require('react-router').History,
    BookingStore = require('../../stores/booking');


module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      booking: BookingStore.current()
    };
  },

  _proceedClick: function (event) {
    event.preventDefault();
    this.history.push("book/" + this.props.params.task_id+ "/taskers");
  },

  componentWillMount: function() {
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
  },

  componentWillUnmount: function() {
    this.bookingListener.remove();
    this.bookingListener = null;
  },

  _onBookingChange: function () {
    this.setState({
      booking: BookingStore.current()
    });
  },

  _locationChange: function (event) {
    event.preventDefault();
    var newBooking = this.state.booking;
    newBooking.location = event.target.value;
    BookingActions.updateBooking(newBooking);
  },

  _descriptionChange: function (event) {
    event.preventDefault();
    var newBooking = this.state.booking;
    newBooking.description = event.target.value;
    BookingActions.updateBooking(newBooking);
  },

  render: function () {
    return (
      <div>
        <label>
          Location
          <input
            type="text"
            onChange={this._locationChange} value={this.state.booking.location}>
          </input>
        </label>
        <label>
          Tell Us About Your Task
          <textarea
            onChange={this._descriptionChange}
            value={this.state.booking.description}></textarea>
        </label>
        <button onClick={this._proceedClick}>Submit</button>
      </div>
    );
  }
});
