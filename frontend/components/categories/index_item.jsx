var React = require('react'),
    Link = require('react-router').Link;
var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],
  _truncateDescription: function (descr) {
    var trunc = descr;
    var truncLength = 30;
    if (descr.length > truncLength + 3) {
      trunc = descr.slice(0,truncLength);
      trunc += "...";
    }

    return trunc;
  },

  navTo: function () {
    var url = "/category/" + this.props.category.id;
    this.history.push({pathname: url});
  },

  render: function () {
    // var descr = this._truncateDescription(this.props.category.description);
    var descr = this.props.category.description;
    var style = {};
    if (this.props.category.img_url_big){
      style = ({
        backgroundImage: 'url('+this.props.category.img_url_big+')'
      });
    }

    if (!this.props.static) {
      return (
        <li className="category-index-item">
          <Link onClick={this.navTo} to={"/category/" + this.props.category.id}>
            <div className="category-tile shadow">
              <div className="category-img" style={style}>

              </div>
              <div className="title-bar">
                <h4 className="category-title">{this.props.category.name}</h4>
                <text className="category-subtitle">{descr}</text>
              </div>
            </div>
          </Link>
        </li>
      );
    } else {
      return (
        <li className="category-index-item">
          <a href="session/new">
            <div className="category-tile shadow">
              <div className="category-img" style={style}>

              </div>
              <div className="title-bar">
                <h4 className="category-title">{this.props.category.name}</h4>
                <text className="category-subtitle">{descr}</text>
              </div>
            </div>
          </a>
        </li>
      );
    }

  }
});