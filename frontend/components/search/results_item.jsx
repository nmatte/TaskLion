var React = require('react'),
    Link = require('react-router').Link;
module.exports = React.createClass({
  render: function () {
    return (
          <Link to={'/book/' + this.props.task.id}>
            <li className="search-bar-result-item">
              <img src={this.props.task.img_url_sm} className="search-result-img"/>
            {this.props.task.name}
          </li>
          </Link>
    );
  }
});
