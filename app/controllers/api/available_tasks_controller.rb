class Api::AvailableTasksController < ApplicationController
  def index
    @available_tasks = AvailableTask.where(tasker_id: params[:tasker_id])
  end

  def show
    @available_task = AvailableTask.find(params[:id])
  end
end
