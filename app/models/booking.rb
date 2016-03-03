# == Schema Information
#
# Table name: bookings
#
#  id                :integer          not null, primary key
#  client_id         :integer          not null
#  address           :string           not null
#  details           :json
#  description       :text             not null
#  date              :date             not null
#  is_complete       :boolean          default(FALSE), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  available_task_id :integer          not null
#

class Booking < ActiveRecord::Base
  belongs_to :available_task
  belongs_to :client, class_name: :User
  has_one :review, class_name: :Review, foreign_key: :booking_id
  has_one :tasker, through: :available_task
  has_one :task, through: :available_task
  validates :available_task_id, :client_id, :address, :description, :date, presence: true


end
