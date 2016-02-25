var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  _truncateDescription: function (descr) {
    var trunc = descr;
    var truncLength = 30;
    if (descr.length > truncLength + 3) {
      trunc = descr.slice(0,truncLength);
      trunc += "...";
    }

    return trunc;
  },

  render: function () {
    var descr = this._truncateDescription(this.props.category.description);
    return (
      <li>
        <Link to={"/category/" + this.props.category.id}>linky</Link>
        {this.props.category.name}
        <br/>
        {descr}
      </li>
    );
  }
});
