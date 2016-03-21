var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      location: "",
      errorMessage: "",
      valid: false
    };
  },

  componentDidMount: function() {
    var input = document.getElementById('location_input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this._placeChange);

    document.getElementById('location_submit').addEventListener("submit", this._onSubmit);
  },

  componentWillUnmount: function() {
    // this.autocomplete.removeListener('place_changed');
  },

  _placeChange: function () {
    this._validateInput();
  },

  _onSubmit: function (event) {
    event.preventDefault();
    this._validateInput();
  },

  _validateInput: function () {
    var place = this.autocomplete.getPlace();
    if (place && place.geometry) {
      this.setState({location: place.formatted_address, errorMessage: "", valid: true});
      this.props.onComplete(place.formatted_address);
    } else {
      this.setState({errorMessage: "Please enter a valid address.", valid: false});
    }
  },

  formClick: function (event) {
    event.preventDefault();
    this.props.onFormClick("location");
  },

  render: function () {
    var shadow = "",
        collapse = "";
    var dis = "";
    if (this.props.isFocused) {
      shadow = " shadow";
    } else {
      collapse = " is-collapsed";
      dis = "disabled";
    }

    var errorMessage = <div className={"error-info" + collapse}>{this.state.errorMessage}</div>;

    return (
      <form  id="location_submit">
        <div className={"detail-item" + shadow + collapse} onClick={this.formClick}>
          <label htmlFor="location_input">
            <h5 onClick={this.formClick}>Your Task Location</h5>
          </label>
          <div className={"completed-info" + collapse} onClick={this.formClick}>{this.state.location}</div>
          <div className={"booking-detail-content" + collapse} >
            <div className={"detail-content-wrapper"}>
              <input id="location_input"
                className="input"
                disabled={dis}
                type="text"
                valueLink={this.linkState('location')}>
              </input>
            </div>
            {errorMessage}
            <div className={"detail-content-wrapper"}>
              <input
                type="submit"
                className="dark-blue-button booking-button"
                value="Continue">
              </input>
            </div>
        </div>
      </div>
    </form>
    );
  }
});
