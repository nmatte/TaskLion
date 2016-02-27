var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <li className="shadow tasker-index-item">
        <div className="tasker-select-box">
          <div className="tasker-img"></div>
          <button className="tasker-select-button">Select & Continue</button>
        </div>
        <div className="tasker-index-item-content">
          <div className="tasker-index-item-top">
            <h3 className="tasker-name">{this.props.tasker.fname +" "+ this.props.tasker.lname}</h3>
            <div className="rate-badge"><strong>${this.props.tasker.rate}</strong>/hr</div>
          </div>
          {this.props.tasker.blurb}
        </div>
      </li>
    );
  }
});
