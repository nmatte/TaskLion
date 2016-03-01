class Api::ReviewsController < ApplicationController
  def show
    @review = Review.find_by(booking_id: params[:booking_id])

    render json: @review
  end

  def index
    @reviews = Review.find_by_sql([<<-SQL, params[:tasker_id]])
      SELECT
        reviews.id, reviews.thumbs_up, reviews.body
      FROM
        reviews
      JOIN
        bookings ON reviews.booking_id = bookings.id
      JOIN
        taskers ON taskers.id = bookings.tasker_id
      WHERE
        taskers.id = ?
    SQL

    thumbs = @reviews.map(&:thumbs_up)
    thumbs_up_ct = thumbs.count(true)
    thumbs_down_ct = thumbs.count(false)
    avg = (100.0 * thumbs_up_ct) / (thumbs_up_ct + thumbs_down_ct)
    render json: {reviews: @reviews, avg: avg}
  end


end
