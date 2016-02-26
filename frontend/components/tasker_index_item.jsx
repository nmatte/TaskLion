var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <li className="shadow tasker-index-item">
        <div className="tasker-select-box">
          <div className="tasker-img"></div>
        </div>
        <div className="tasker-index-item-content">
          {this.props.tasker.fname +" "+ this.props.tasker.lname}
        </div>
      </li>
    );
  }
});
