module.exports = {
  storeCurrentBooking: function (booking) {
    if (booking.date)
      localStorage.setItem('booking_date', booking.date);
    if (booking.task_id)
      localStorage.setItem('booking_task_id', booking.task_id);
    if (booking.tasker_id)
      localStorage.setItem('booking_tasker_id', booking.tasker_id);
    if (booking.client_id)
      localStorage.setItem('booking_client_id', booking.client_id);
    if (booking.details)
      localStorage.setItem('booking_details', booking.details);
    if (booking.description)
      localStorage.setItem('booking_descr', booking.description);
    if (booking.address)
      localStorage.setItem('booking_addr', booking.address);
  },

  // date: date,
  // task_id: booking_params[:task_id],
  // tasker_id: booking_params[:tasker_id],
  // client_id: booking_params[:client_id],
  // details: params[:booking][:details],
  // description: booking_params[:description],
  // address: booking_params[:address]

  getCurrentBooking: function () {
    var booking = {};
    booking.date = localStorage.getItem('booking_date');
    booking.task_id = localStorage.getItem('booking_task_id');
    booking.tasker_id = localStorage.getItem('booking_tasker_id');
    booking.client_id = localStorage.getItem('booking_client_id');
    booking.details = localStorage.getItem('booking_details');
    booking.description = localStorage.getItem('booking_descr');
    booking.address = localStorage.getItem('booking_addr');

    return booking;
  },

  clearBooking: function () {
      localStorage.setItem('booking_date', "");
      localStorage.setItem('booking_task_id', "");
      localStorage.setItem('booking_tasker_id', "");
      localStorage.setItem('booking_client_id', "");
      localStorage.setItem('booking_details', "");
      localStorage.setItem('booking_descr', "");
      localStorage.setItem('booking_addr', "");
  }
};
