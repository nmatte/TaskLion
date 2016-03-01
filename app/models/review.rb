class Review < ActiveRecord::Base
  belongs_to :booking
  has_one :tasker, through: :booking
  has_one :client, through: :booking
  has_one :task, through: :booking

  validates :booking, :body, presence: true
end
