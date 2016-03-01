class Api::BookingsController < ApplicationController
  def show
    @booking = Booking.find_by(id: params[:id])

    if @booking.nil?
      render json: {error: "Booking not found."}
    else
      render :show
    end
  end

  def update
    @booking = Booking.find_by(id: params[:id])
    date = Time.at(booking_params[:epoch_date]).to_datetime
    success =  @booking.update(
          date: date,
          task_id: booking_params[:task_id],
          tasker_id: booking_params[:tasker_id],
          client_id: booking_params[:client_id],
          details: params[:booking][:details],
          description: booking_params[:description],
          address: booking_params[:address]
    )
    if success
      render :show
    else
      render json: @booking.errors.full_messages
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])

    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages
    end
  end

  def create

    @booking = Booking.new(
      date: booking_params[:date],
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
      .permit(:tasker_id, :client_id, :task_id, :details, :address, :description, :date)
  end
end
