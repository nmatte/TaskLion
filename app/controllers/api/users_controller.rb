class Api::UsersController < ApplicationController
  def current
    # user = User.find_by(session_token: params[:session_token])
    render json: current_user
  end
end
