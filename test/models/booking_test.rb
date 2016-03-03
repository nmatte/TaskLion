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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
