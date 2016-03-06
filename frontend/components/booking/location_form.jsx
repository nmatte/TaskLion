var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      location: "",
      errorMessage: ""
    };
  },

  componentDidMount: function() {
    var input = document.getElementById('location_input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this._placeChange);
  },

  componentWillUnmount: function() {
    // this.autocomplete.removeListener('place_changed');
  },

  _placeChange: function () {
    var place = this.autocomplete.getPlace();
    // debugger;
    if (place.geometry) {
      this.setState({location: place.formatted_address, errorMessage: ""});
      this.props.onComplete(place.formatted_address);
    } else {
      this.setState({errorMessage: "Please enter a valid address."});
    }
  },

  componentWillReceiveProps: function(nextProps) {

  },

  render: function () {
    var shadow = "",
        collapse = "";
    if (this.props.isFocused) {
      shadow = " shadow";
    } else {
      collapse = " is-collapsed";
      // debugger;

    }

    var errorMessage = <div className={"error-info" + collapse}>{this.state.errorMessage}</div>;

    return (
      <div>
        <div className={"detail-item" + shadow + collapse}>
          <label htmlFor="location_input">
            <h5>Your Task Location</h5>
          </label>
          <div className={"completed-info" + collapse}>{this.state.location}</div>
          <div className={"booking-detail-content" + collapse} >
            <div className={"detail-content-wrapper"}>
              <input id="location_input"
                className="input"
                type="text"
                valueLink={this.linkState('location')}>
              </input>
            </div>
            {errorMessage}
            <div className={"detail-content-wrapper"}>
              <button
                className="dark-blue-button booking-button">
                Continue
              </button>
            </div>
        </div>
      </div>
      </div>
    );
  }
});
