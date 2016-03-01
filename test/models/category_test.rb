# == Schema Information
#
# Table name: categories
#
#  id                                    :integer          not null, primary key
#  name                                  :string           not null
#  description                           :string           not null
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  {:index=>true, :foreign_key=>true}_id :integer
#  img_url_big                           :string
#  img_url_sm                            :string
#

require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
