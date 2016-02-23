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

class User < ActiveRecord::Base
  attr_reader :password

  validates :password, length: {minimum: 6, allow_nil: true}
  validates :fname, :lname, presence: true
  validates :email, uniqueness: true, presence: true
  # after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user if user && user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(new_password)
    @password = new_password
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
