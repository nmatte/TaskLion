class Api::TasksController < ApplicationController
  def show
    @task = Task.find(params[:id])
  end


  def search
    if params[:query].present?
      @tasks = Task.where("name ~ ?", "^#{params[:query].capitalize}")
    else
      @tasks = Task.none
    end

    render :index
  end
end
