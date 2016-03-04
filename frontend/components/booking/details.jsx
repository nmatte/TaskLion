var React = require('react'),
    BookingActions = require('../../actions/booking_actions'),
    History = require('react-router').History,
    BookingStore = require('../../stores/booking');


module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      booking: BookingStore.current(),
      focused: "location",
      location: BookingStore.current().location,
      description: BookingStore.current().description
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
    this.setState({
      location: event.target.value
    });
  },

  _descriptionChange: function (event) {
    event.preventDefault();
    BookingActions.updateBooking({description: event.target.value});
    this.setState({
      description: event.target.value
    });
  },

  makeDetailItem: function (title, inputComponent, button, isFocused, infoVal, contentHeight) {
    var collapseTag = isFocused ? "" : " is-collapsed";
    var shadowTag = isFocused ? " shadow" : "";
    // var detailItemHeight = isFocused ? {height: contentHeight} : {height: 60};
    return (
      <div className={"detail-item" + shadowTag + collapseTag}>
        <label htmlFor="location_input">
          <h5>{title}</h5>
        </label>
        <div className={"completed-info" + collapseTag}>{infoVal}</div>
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

    var locationForm = this.makeDetailItem(locationTitle, locationInput, locationButton, this.state.focused === "location",this.state.location);

    var descriptionTitle = "Tell Us About Your Task";
    var descriptionInput = (
        <textarea
          id="description_input"
          className="input booking-description"
          onChange={this._descriptionChange}
          value={this.state.booking.description}/>
    );
    var descriptionButton = <button className="dark-blue-button booking-button" onClick={this._proceedClick}>Save</button>;


    var descriptionForm = this.makeDetailItem(descriptionTitle, descriptionInput, descriptionButton, this.state.focused === "description", this.state.description);

    return (
      <div className="detail-container">
        {locationForm}
        {descriptionForm}
      </div>
    );
  }
});
