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
    this.history.push("book/" + this.props.params.task_id + "/taskers");
  },

  _locationClick: function (event) {
    event.preventDefault();
    this.setState ({
      focused: "description"
    });
  },

  componentDidMount: function() {
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
    BookingActions.fetchBooking();
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
    BookingActions.updateBooking({address: event.target.value});
  },

  _descriptionChange: function (event) {
    event.preventDefault();
    BookingActions.updateBooking({description: event.target.value});
  },

  makeDetailItem: function (title, inputComponent, button, isFocused) {
    var collapseTag = isFocused ? "" : " is-collapsed";
    var shadowTag = isFocused ? " shadow" : "";
    return (
      <div className={"detail-item" + shadowTag + collapseTag}>
        <label htmlFor="location_input">
          <h5>{title}</h5>
        </label>
        <div className={"completed-info" + collapseTag}>plaaaaaaaaceholder</div>
        <div className={"booking-detail-content" + collapseTag} >
          <div className={"detail-content-wrapper"}>
            {inputComponent}
          </div>

          <div className={"detail-content-wrapper"}>
            {button}
          </div>
      </div>
    </div>
    );
  },

  render: function () {
    var collapseLocation = "";
    var collapseDescription = "";

    if (this.state.focused === "location") {
      collapseLocation = " is-focused";
    } else {
      collapseDescription = " is-focused";
    }

    var locationTitle = "Your Task Location";

    var locationInput = (
      <input id="location_input"
        className="input"
        type="text"
        onChange={this._locationChange} value={this.state.booking.address}>
      </input>
    );

    var locationButton = (
      <button
        className="dark-blue-button booking-button"
        onClick={this._locationClick}>
        Save
      </button>
    );

    var locationForm = this.makeDetailItem(locationTitle, locationInput, locationButton, this.state.focused === "location");

    var descriptionForm = (
      <div className="detail-item shadow">
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
