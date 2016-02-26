var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <label>
          Location
          <input type="text"></input>
        </label>
        <label>
          Tell Us About Your Task
          <textarea></textarea>
        </label>
      </div>
    );
  }
});
