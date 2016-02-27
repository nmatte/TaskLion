class Api::TaskersController < ApplicationController
  def show
    @tasker = Tasker.find(params[:id])
  end

  def index
    # task = Task.find(params[:task_id])
    tasks = AvailableTask.where(task_id: params[:task_id]).includes(:tasker)
    @tasks = tasks;
  end
end
