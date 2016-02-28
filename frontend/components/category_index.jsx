var React = require('react'),
    CategoryStore = require('../stores/category'),
    CategoryIndexItem = require('./category_index_item'),
    ApiUtil = require('../util/api_util');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      categories: CategoryStore.all()
    };
  },

  _onCategoryChange: function () {
    this.setState({
      categories: CategoryStore.all()
    });
  },

  componentDidMount: function () {
    this.categoryListener = CategoryStore.addListener(this._onCategoryChange);
    ApiUtil.fetchCategories();
  },

  componentWillUnmount: function () {
    this.categoryListener.remove();
    this.categoryListener = null;
  },


  render: function () {
    var catLis = this.state.categories.map(
      function (category, index) {
        return <CategoryIndexItem key={index} category={category}/>;
      }
    );
    return (
      <ul className="category-container">
        {catLis}
      </ul>
    );
  }
});