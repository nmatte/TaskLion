var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      description: ""
    };
  },

  _saveClick: function () {
    this.props.onComplete(this.state.description);
  },

  formClick: function (event) {
    event.preventDefault();
    this.props.onFormClick("description");
  },

  render: function () {
    var collapseTag = this.props.isFocused ? "" : " is-collapsed";
    var shadowTag = this.props.isFocused ? " shadow" : "";
    return (
      <div className={"detail-item" + shadowTag + collapseTag} onClick={this.formClick}>
        <label htmlFor="description_input">
          <h5 onClick={this.formClick}>Tell Us About Your Task</h5>
        </label>
        <div className={"completed-info" + collapseTag} onClick={this.formClick}>{this.state.description}</div>
        <div className={"booking-detail-content" + collapseTag} >
          <div className={"detail-content-wrapper"}>
            <textarea
              id="description_input"
              className="input booking-description"
              valueLink={this.linkState('description')}/>
          </div>

          <div className={"detail-content-wrapper"}>
            <button className="dark-blue-button booking-button" onClick={this._saveClick}>Save</button>
          </div>
      </div>
    </div>
    );
  }
});
