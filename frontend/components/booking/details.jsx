var React = require('react'),
    BookingActions = require('../../actions/booking_actions'),
    History = require('react-router').History,
    BookingStore = require('../../stores/booking');


module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      booking: BookingStore.current(),
      focused: "location"
    };
  },

  _proceedClick: function (event) {
    event.preventDefault();
    this.history.push("book/" + this.props.params.task_id+ "/taskers");
  },

  _locationClick: function (event) {
    event.preventDefault();
    this.setState ({
      focused: "description"
    });
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
    var locationClass = "detail-item shadow ";
    var descriptionClass = "detail-item shadow ";

    if (this.state.focused === "location") {
      locationClass += "is-focused";
    } else {
      descriptionClass += "is-focused";
    }

    var locationForm = (
      <div className={locationClass}>
        <label htmlFor="location_input">
          <h5>Your Task Location</h5>
        </label>
        <div className="booking-detail-content">
          <div className="detail-content-wrapper">
            <input id="location_input"
              className="input"
              type="text"
              onChange={this._locationChange} value={this.state.booking.location}>
            </input>
          </div>

          <div className="detail-content-wrapper">
            <button
              className="dark-blue-button booking-button"
              onClick={this._locationClick}>
              Save
            </button>
          </div>
        </div>

      </div>
    );

    var descriptionForm = (
      <div className={descriptionClass}>
        <label htmlFor="description_input">
          <h5>Tell Us About Your Task</h5>
        </label>
        <div className="booking-detail-content">
          <div className="detail-content-wrapper">
            <textarea id="description_input"
              className="input booking-description"
              onChange={this._descriptionChange}
              value={this.state.booking.description}/>
          </div>

          <div className="detail-content-wrapper">
            <button className="dark-blue-button booking-button" onClick={this._proceedClick}>Save</button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="detail-container">
        {locationForm}

        {descriptionForm}


      </div>
    );
  }
});
