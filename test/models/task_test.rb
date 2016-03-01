# == Schema Information
#
# Table name: tasks
#
#  id                                    :integer          not null, primary key
#  category_id                           :integer          not null
#  name                                  :string           not null
#  details                               :json
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  description                           :string           not null
#  {:index=>true, :foreign_key=>true}_id :integer
#  img_url_big                           :string
#  img_url_sm                            :string
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
