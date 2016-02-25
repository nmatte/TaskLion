class Api::TaskersController < ApplicationController
  def show
    @tasker = Tasker.find(params[:id])
  end

  def index
    task = Task.find(params[:task_id])
    @taskers = task.taskers
  end
end
