var React = require('react'),
    BookingActions = require('../../actions/booking_actions'),
    LocationForm = require('./location_form'),
    History = require('react-router').History,
    BookingStore = require('../../stores/booking'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');


module.exports = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function () {
    return {
      address: this.getAddressFromStore(),
      description: this.getDescriptionFromStore(),
      errors: [],
      focused: "location"
    };
  },

  getAddressFromStore: function () {
    return BookingStore.current().address;
  },
  getDescriptionFromStore: function () {
    return BookingStore.current().description;
  },

  _proceedClick: function (event) {
    event.preventDefault();
    this.history.push("book/" + this.props.params.task_id + "/taskers");
  },

  _locationClick: function (event) {
    event.preventDefault();
    var place = this.autocomplete.getPlace();
    if(!place.geometry) {
      this.setState({error: "Please enter a valid address."});
    } else {
      this.setState ({focused: "description"});
      BookingActions.updateBooking({address: place.formatted_address});
    }


  },

  componentDidMount: function() {
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
    BookingActions.fetchBooking();
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('location_input'));
    this.autocomplete.addListener('place_changed', this._placeChange);
  },

  _placeChange: function () {
    var place = this.autocomplete.getPlace();
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

  _descriptionChange: function (event) {
    event.preventDefault();
    BookingActions.updateBooking({description: event.target.value});
    this.setState({
      description: event.target.value
    });
  },

  makeDetailItem: function (title, inputComponent, button, isFocused, infoVal) {
    var collapseTag = isFocused ? "" : " is-collapsed";
    var shadowTag = isFocused ? " shadow" : "";
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
        onChange={this._locationChange} value={this.state.address}>
      </input>
    );
    var locationButton = (
      <button
        className="dark-blue-button booking-button"
        onClick={this._locationClick}>
        Save
      </button>
    );
    var locationForm = this.makeDetailItem(
      locationTitle,
      locationInput,
      locationButton,
      this.state.focused === "location",
      this.state.location);

    var descriptionTitle = "Tell Us About Your Task";
    var descriptionInput = (
        <textarea
          id="description_input"
          className="input booking-description"
          value={this.state.description}/>
    );
    var descriptionButton = <button className="dark-blue-button booking-button" onClick={this._proceedClick}>Save</button>;
    var descriptionForm = this.makeDetailItem(
      descriptionTitle,
      descriptionInput,
      descriptionButton,
      this.state.focused === "description", this.state.description);

    return (
      <div className="detail-container">
        <LocationForm/>
        {descriptionForm}
      </div>
    );
  }
});
