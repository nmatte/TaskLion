json.array! @categories do |category|
  json.partial! 'api/categories/category', category: category
  json.img_url_big category.img_url_big
end
