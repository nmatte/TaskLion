class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?, :maps_key

  def current_user
    User.find_by(session_token: session[:session_token]) if session[:session_token]
  end

  def log_in_user(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_sign_in
    redirect_to new_session_url unless signed_in?
  end

  def signed_in?
    !!current_user
  end

  def require_signed_out
    redirect_to root_url if signed_in?
  end

  def require_signed_in
    redirect_to new_session_url unless signed_in?
  end

  def maps_key
    Figaro.env.maps_key
  end

end
