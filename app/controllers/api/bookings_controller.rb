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
          available_task_id: booking_params[:available_task_id],
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
      available_task_id: booking_params[:available_task_id],
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
      .permit(:client_id, :available_task_id, :details, :address, :description, :date)
  end
end
