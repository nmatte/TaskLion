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
  def new
  end

  def create
    user = User.new(email: user_params[:email], password: user_params[:password], lname: user_params[:lname], fname: user_params[:fname])
    require 'byebug'; debugger
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
