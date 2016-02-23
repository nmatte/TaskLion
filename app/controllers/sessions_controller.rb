class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])

    if @user.save
      #TODO
    else
      #TODO
    end
  end

  def new
  end

  def destroy
    log_out!
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
