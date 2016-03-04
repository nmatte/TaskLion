class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def featured
    f = Category.find_by(name: "Featured")
    @featured ={
      id: f.id,
      name: f.name,
      description: f.description,
      img_url_big: f.img_url_big,
      img_url_sm: f.img_url_sm,
      tasks: Task.where(featured: true)
    }
    render :featured
  end
end
