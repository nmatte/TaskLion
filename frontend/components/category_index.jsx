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
    var catLis = this.state.categories.slice(0,6).map(
      function (category, index) {
        return <CategoryIndexItem key={index} static={this.props.static} category={category}/>;
      }.bind(this)
    );
    return (
      <ul className="category-container">
        {catLis}
      </ul>
    );
  }
});
