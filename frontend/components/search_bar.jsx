var React = require('react'),
    SearchApiUtil = require('../util/search_api_util'),
    SearchResultsStore = require('../stores/search_results'),
    SearchBarResults = require('./search_bar_results');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      showResults: false,
      results: SearchResultsStore.all()
    };
  },

  _onInputChange: function (event) {
    var value = event.target.value;
    if (value.length > 0) {
      SearchApiUtil.searchFor(value);
      this.setState({showResults: true});
    } else {
      this.setState({showResults: false});
    }
  },

  _onWindowClick: function (event) {
    // debugger;
    if (event.target === document.getElementById("search")) {
    } else if (event.target.parentNode === document.getElementById("search")) {

    } else {
      this.setState({showResults: false});
    }
  },

  componentDidMount: function() {
    window.addEventListener("click",this._onWindowClick);
    this.resultsListener = SearchResultsStore.addListener(this._onResultsChange);
  },

  componentWillUnmount: function() {
    window.removeEventListener("click", this._onWindowClick);
    this.resultsListener.remove();
  },

  _onResultsChange: function () {
    this.setState({results: SearchResultsStore.all()});
  },

  render: function () {
    return (
      <div className="search-bar" id="search" >
        <input type="text" className="input" onChange={this._onInputChange}/>
        <div className={"results-dropdown" + (this.state.showResults ? "" : " hide")}>
          <SearchBarResults tasks={this.state.results}/>
          Don't see what you're looking for? Check out one of our featured tasks:
        </div>
      </div>
    );
  }
});
