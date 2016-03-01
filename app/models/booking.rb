class Booking < ActiveRecord::Base
  belongs_to :tasker
  belongs_to :task
  belongs_to :client, class_name: :User
  has_one :review, class_name: :Review, foreign_key: :booking_id
  validates :task_id, :client_id, :tasker_id, :address, :description, :date, presence: true


end
