class Api::AvailableTasksController < ApplicationController
  def index
    @available_tasks = AvailableTask.where(tasker_id: params[:tasker_id])
  end
end
