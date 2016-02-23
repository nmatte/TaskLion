class SessionsController < ApplicationController
  before_action :require_signed_out, only: [:create, :new]
  before_action :require_signed_in, only: [:destroy]
  def create
    user = User.find_by_credentials(user_params[:email], user_params[:password])

    if user.save
      log_in_user(user)
      redirect_to :root
    else
      flash.now[:errors] = user.errors.full_messages
    end
  end

  def new
  end

  def destroy
    log_out!
    redirect_to root_url
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
