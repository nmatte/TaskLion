var React = require('react'),
    CategoryIndex = require('./category_index');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="dashboard-main">
        <div className="category-index-container">
          <h2>Top Categories in Your Area</h2>
          <CategoryIndex />

        </div>
      </div>

    );
  }
});
