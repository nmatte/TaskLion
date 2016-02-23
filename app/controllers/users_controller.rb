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
  def new
  end

  def create
    user = User.new(user_params)

    if user.save
      redirect_to root_url
    else
      flash[:errors] = user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
