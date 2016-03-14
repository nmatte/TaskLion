class Api::UsersController < ApplicationController
  def current
    # user = User.find_by(session_token: params[:session_token])
    @user = current_user
    render :current
  end

end
