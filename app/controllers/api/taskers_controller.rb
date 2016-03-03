class Api::TaskersController < ApplicationController
  def show
    @tasker = Tasker.find(params[:id])
    @tasker.reviews = Review.reviews_for_tasker(@tasker.id)
    @review_avg = Review.review_avg(@tasker.reviews)
  end

  def index
    # json.id available_task.tasker_id
    # json.fname available_task.tasker_fname
    # json.lname available_task.tasker_lname
    # json.img_url_sm available_task.tasker_img_url_sm
    # json.blurb available_task.blurb
    # json.rate available_task.rate
    # json.available_task_id available_task.id
    # available_tasks = AvailableTask.where(task_id: params[:task_id]).includes(:tasker)
    @available_tasks = AvailableTask.find_by_sql([<<-SQL, params[:task_id]])
      SELECT
        users.fname AS tasker_fname,
        users.lname AS tasker_lname,
        taskers.img_url_sm AS tasker_img_url_sm,
        available_tasks.*
      FROM
        available_tasks
      JOIN
        taskers ON taskers.id = available_tasks.tasker_id
      JOIN
        users ON users.id = taskers.user_id
      JOIN
        tasks ON available_tasks.task_id = tasks.id
      WHERE
        tasks.id = ?
    SQL
    # @available_tasks = available_tasks;
  end
end
