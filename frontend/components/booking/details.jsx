var React = require('react'),
    BookingActions = require('../../actions/booking_actions'),
    LocationForm = require('./location_form'),
    DescriptionForm = require('./description_form'),
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

  _proceedClick: function (value) {
    BookingActions.updateBooking({description: value});
    this.history.push("book/" + this.props.params.task_id + "/taskers");
  },

  _locationClick: function (value) {
    this.setState({focused: "description"});
    BookingActions.updateBooking({address: value});
  },

  componentDidMount: function() {
    this.bookingListener = BookingStore.addListener(this._onBookingChange);
    BookingActions.fetchBooking();
  },

  componentWillUnmount: function() {
    this.bookingListener.remove();
  },

  _onBookingChange: function () {
    this.setState({
      booking: BookingStore.current()
    });
  },

  _onFormClick: function (clickSource) {
    this.setState({
      focused: clickSource
    });
  },

  render: function () {
    return (
      <div className="detail-container">
        <LocationForm id="location_form" isFocused={this.state.focused === "location"} onComplete={this._locationClick} onFormClick={this._onFormClick}/>
        <DescriptionForm id="description_form" isFocused={this.state.focused === "description"} onComplete={this._proceedClick} onFormClick={this._onFormClick}/>
      </div>
    );
  }
});
