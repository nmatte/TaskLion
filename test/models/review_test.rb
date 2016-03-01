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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
