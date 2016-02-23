var React = require('react'),
    ReactDom = require('react-dom'),
    ApiUtil = require('./util/api_util');

window.ApiUtil = ApiUtil;

document.addEventListener("DOMContentLoaded", function functionName() {
  ReactDom.render(
    <div>div you know about divs?</div>,
    document.getElementById('app')
  );
});
