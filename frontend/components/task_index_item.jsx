var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <li>
        {this.props.task.name}
        <br/>
        {this.props.task.description}
      </li>
    );
  }
});
