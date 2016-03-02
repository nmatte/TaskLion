class Api::ReviewsController < ApplicationController
  def show
    @review = Review.find_by(booking_id: params[:booking_id])

    render json: @review
  end

  def index
    @reviews = Review.reviews_for_tasker(params[:tasker_id])

    thumbs = @reviews.map(&:thumbs_up)
    thumbs_up_ct = thumbs.count(true)
    thumbs_down_ct = thumbs.count(false)
    avg = 100.0
    avg = (100.0 * thumbs_up_ct) / (thumbs_up_ct + thumbs_down_ct) if thumbs.count > 0
    render json: {reviews: @reviews, avg: avg}
  end


end
