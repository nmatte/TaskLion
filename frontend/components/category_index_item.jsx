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
    var bg;
    switch (this.props.category.id) {
      case 2:
      bg = 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456652566/couch%20_shredding.jpg';
      break;
      case 1:
      bg = 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456652481/blind_restructuring.jpg';
      break;
      case 3:
      bg = 'http://res.cloudinary.com/duwqltu7o/image/upload/c_scale,w_720/v1456657008/therapy_xfeuyf.jpg';
      break;
      case 4:
      bg = 'http://res.cloudinary.com/duwqltu7o/image/upload/c_scale,w_720/v1456656657/hunting_havwgx.jpg';
      break;
      case 5:
       bg = 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456656466/protection_auaaxc.jpg';
       break;
      case 6:
        bg = 'http://res.cloudinary.com/duwqltu7o/image/upload/c_scale,w_720/v1456656842/entertaining_hsg2n4.jpg';
    }

    style = ({
        backgroundImage: 'url('+bg+')'
    });

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
  }
});
