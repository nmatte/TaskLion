# == Schema Information
#
# Table name: bookings
#
#  id                :integer          not null, primary key
#  client_id         :integer          not null
#  tasker_id         :integer          not null
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
  belongs_to :tasker
  belongs_to :task
  belongs_to :client, class_name: :User
  has_one :review, class_name: :Review, foreign_key: :booking_id
  validates :available_task_id, :client_id, :tasker_id, :address, :description, :date, presence: true


end
