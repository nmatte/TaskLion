# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lname           :string           not null
#  fname           :string           not null
#

class UsersController < ApplicationController
  before_action :require_signed_out, only: [:new, :create]
  before_action :require_signed_in, only: [:edit, :update]
  def new
  end

  def edit
  end

  def update
    # user = User.find_by(session_token: session[:session_token]);
  end

  def create
    user = User.new(user_params)
    if user.save
      log_in_user(user)
      redirect_to root_url
    else
      flash[:errors] = user.errors.full_messages.concat([user_params])
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
