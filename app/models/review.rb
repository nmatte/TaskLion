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

  def self.reviews_for_tasker(id)
    Review.find_by_sql([<<-SQL, id])
      SELECT
        reviews.id,
        reviews.thumbs_up,
        reviews.body,
        users.fname AS client_fname,
        users.lname AS client_lname
      FROM
        reviews
      JOIN
        bookings ON reviews.booking_id = bookings.id
      JOIN
        taskers ON taskers.id = bookings.tasker_id
      JOIN
        users ON users.id = bookings.client_id
      WHERE
        taskers.id = ?
    SQL
  end
end
