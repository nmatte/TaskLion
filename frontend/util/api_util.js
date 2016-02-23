

module.exports = {
  fetchCategories: function () {
    $.ajax({
      url: '/api/categories',
      success: function (response) {
        console.log(response);
      }
    });
  }
};
