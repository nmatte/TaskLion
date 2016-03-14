var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="task-banner">
        <img src={this.props.task.img_url_sm} className="task-banner-pic"/>
        <h2>{this.props.task.name}</h2>
      </div>
    );
  }
});
