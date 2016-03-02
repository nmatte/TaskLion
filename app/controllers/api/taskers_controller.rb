class Api::TaskersController < ApplicationController
  def show
    @tasker = Tasker.find(params[:id])
    @tasker.reviews = Review.reviews_for_tasker(@tasker.id)
    @review_avg = Review.review_avg(@tasker.reviews)
  end

  def index
    # task = Task.find(params[:task_id])
    available_tasks = AvailableTask.where(task_id: params[:task_id]).includes(:tasker)
    @available_tasks = available_tasks;
  end
end
