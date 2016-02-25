class Api::TaskersController < ApplicationController
  def show
    @tasker = Tasker.find(params[:id])
  end

  def index
    @taskers = Tasker.all
  end
end
