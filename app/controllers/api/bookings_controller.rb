class Api::BookingsController < ApplicationController
  def show
  end

  def update
  end

  def destroy
  end

  def create
    date = Time.at(booking_params[:epoch_date]).to_datetime

    @booking = Booking.new(
      date: date,
      task_id: booking_params[:task_id],
      tasker_id: booking_params[:tasker_id],
      client_id: booking_params[:client_id],
      details: params[:booking][:details],
      description: booking_params[:description],
      address: booking_params[:address]
    )

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages
    end
  end

  private
  def booking_params
    params
      .require(:booking)
      .permit(:tasker_id, :client_id, :task_id, :details, :address, :description, :epoch_date)
  end
end
