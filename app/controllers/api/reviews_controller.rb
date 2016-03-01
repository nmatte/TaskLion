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

    render json: @reviews.first
  end
end
