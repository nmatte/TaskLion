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

  def self.review_avg(reviews)
    thumbs = reviews.map(&:thumbs_up)
    thumbs_up_ct = thumbs.count(true)
    thumbs_down_ct = thumbs.count(false)
    avg = 100.0
    avg = (100.0 * thumbs_up_ct) / (thumbs_up_ct + thumbs_down_ct) if thumbs.count > 0
    avg.round(2)
  end

  def self.reviews_for_tasker(id)
    Review.find_by_sql([<<-SQL, id])
      SELECT
        reviews.id,
        reviews.thumbs_up,
        reviews.body,
        users.fname AS client_fname,
        users.lname AS client_lname,
        tasks.name AS task_name
      FROM
        reviews
      JOIN
        bookings ON reviews.booking_id = bookings.id
      JOIN
        available_tasks ON available_tasks.id = bookings.available_task_id
      JOIN
        taskers ON taskers.id = available_tasks.tasker_id
      JOIN
        users ON users.id = bookings.client_id
      JOIN
        tasks ON tasks.id = available_tasks.task_id
      WHERE
        taskers.id = ?
    SQL
  end
end
