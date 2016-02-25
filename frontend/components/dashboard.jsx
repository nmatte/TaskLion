var React = require('react'),
    CategoryIndex = require('./category_index');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <img src="http://i.imgur.com/H5mUt5J.gif" alt="meow" />
        <CategoryIndex />
      </div>

    );
  }
});
