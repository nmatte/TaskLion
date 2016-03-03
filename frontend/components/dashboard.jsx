var React = require('react'),
    CategoryIndex = require('./category_index'),
    SearchBar = require('./search_bar');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="dashboard-main">
        <SearchBar/>

        <div className="get-started-container">
          <h2>How to Get Started</h2>
          <p>We're excited to help! Here's how it works:</p>
          <div className="get-started-step">
            <div className="get-started-icon">
              1
            </div>
            <div>
              <h3>Tell us what you need help with</h3>
              <p>
                {"Pristine, unbroken porcelain lying around? You name it. We've got you covered."}
              </p>
            </div>
          </div>
          <div className="get-started-step">
            <div className="get-started-icon">
              2
            </div>
            <div>
              <h3>Select a date and time</h3>
              <p>
                {"Let us know when you need your task done. We'll find the best Taskers who fit your schedule."}
              </p>
            </div>
          </div>
          <div className="get-started-step">
            <div className="get-started-icon">
              3
            </div>
            <div>
              <h3>Choose a Cat</h3>
              <p>
                Our highly qualified Taskers have all been to the vet, so whomever you choose, you can rest assured they they'll get the job done right.
              </p>
            </div>
          </div>
        </div>
        <div className="category-index-container">
          <h2>Top Categories in Your Area</h2>
          <CategoryIndex />

        </div>
      </div>

    );
  }
});
