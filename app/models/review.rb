# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  booking_id :integer          not null
#  thumbs_up  :boolean          default(TRUE), not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  belongs_to :booking
  has_one :tasker, through: :booking
  has_one :client, through: :booking
  has_one :task, through: :booking

  validates :booking, :body, presence: true
end
