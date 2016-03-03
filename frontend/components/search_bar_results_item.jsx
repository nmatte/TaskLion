var React = require('react'),
    Link = require('react-router').Link;
module.exports = React.createClass({
  render: function () {
    return (
        <li>
          <Link to={'/book/' + this.props.task.id}>
            {this.props.task.name}

          </Link>
        </li>
    );
  }
});
