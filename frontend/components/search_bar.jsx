var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      showResults: false
    };
  },

  _onInputChange: function (event) {
    if (event.target.value.length > 0) {
      this.setState({showResults: true});
    } else {
      this.setState({showResults: false});
    }
  },

  _onWindowClick: function (event) {
    debugger;
    if (event.target === document.getElementById("search")) {
    } else {
      this.setState({showResults: false});
    }
  },

  componentDidMount: function() {
    window.addEventListener("click",this._onWindowClick);
  },

  render: function () {
    return (
      <div className="search-bar no-collapse" id="search" >
        <input type="text" className="input" onChange={this._onInputChange}/>
        <div className={"results-dropdown" + (this.state.showResults ? "" : " hide")}>Results</div>
      </div>
    );
  }
});
