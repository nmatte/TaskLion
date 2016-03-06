var React = require('react');

module.exports = React.createClass({
  render: function () {
    var shadow, collapse;
    if (this.props.isCollapsed) {
      shadow = "";
      collapse = " is-focused";
    } else {
      shadow = " shadow";
      collapse = "";
    }

    return (
      <div>
        <div className={"detail-item" + shadow + collapse}>
          <label htmlFor="location_input">
            <h5>Your Task Location</h5>
          </label>
          <div className={"completed-info" + collapse}></div>
          <div className={"booking-detail-content" + collapse} >
            <div className={"detail-content-wrapper"}>
              <input id="location_input"
                className="input"
                type="text">
              </input>
            </div>

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
