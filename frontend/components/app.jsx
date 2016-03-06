var React = require('react'),
    Account = require('./account'),
    Navbar = require('./nav_bar'),
    CategoryStore = require('../stores/category'),
    TaskStore = require('../stores/task'),
    ApiUtil = require('../util/api_util'),
    TaskApiUtil = require('../util/tasker_api_util'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      headerContent: {}
    };
  },

  _onTaskChange: function () {
    this.setHeaderToTask();
  },

  setHeaderToTask: function () {
    this.setState({headerContent: TaskStore.find(this.props.params.task_id)});
  },

  _onCategoryChange: function () {
    this.setHeaderToCategory();
  },

  setHeaderToCategory: function () {
    this.setState({headerContent: CategoryStore.find(this.props.params.category_id)});
  },

  componentDidMount: function() {
    this.taskListener = TaskStore.addListener(this._onTaskChange);
    this.categoryListener = CategoryStore.addListener(this._onCategoryChange);
    this.fetchHeaderContent(this.props);
  },

  fetchHeaderContent: function (propsToUse) {
    if (propsToUse.params.hasOwnProperty("task_id")) {
      TaskApiUtil.fetchTask(propsToUse.params.task_id);
    } else if (propsToUse.params.hasOwnProperty("category_id")) {
      ApiUtil.fetchSingleCategory(propsToUse.params.category_id);
    }
  },

  componentWillUnmount: function() {
    this.taskListener.remove();
    this.categoryListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    this.fetchHeaderContent(nextProps);
  },


  render: function () {
    var path = this.props.location.pathname;
    var footer = (
      <div className="footer">
        <div className="footer-container">
          Thanks for visiting my site.<br/>
          I hope you've enjoyed all the cat pictures!<br/>
          <br/>
          <a href="https://github.com/nmatte">Check out my GitHub.</a><br/>
          More footer stuff.<br/>
          Yeah. Placeholders. Yay.<br/>
        </div>
      </div>
    );
    var showFooter = (path.indexOf("book") === -1 && path.indexOf("account") === -1 && path.indexOf("profile") === -1);
    var clearNavbar = showFooter && (path.indexOf("dashboard") === -1);
    if (clearNavbar) {
      return(
        <div>
          <div><Navbar
            mode={"clear"}
            title={this.state.headerContent.name}
            subtitle={this.state.headerContent.description}
            imgUrl={this.state.headerContent.img_url_big}/>

          </div>
          {this.props.children}
          {footer}
        </div>
      );

    } else {
      return(
        <div>
          <div>
            <Navbar mode={"opaque"}/>

          </div>
          {this.props.children}
          {showFooter ? footer : <div></div>}
        </div>
      );

    }

  }
});
